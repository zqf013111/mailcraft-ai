import { NextRequest, NextResponse } from 'next/server';

// 使用 Node.js runtime 以便正确读取环境变量
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const QWEN_API_KEY = process.env.QWEN_API_KEY;
const QWEN_API_HOST = process.env.QWEN_API_HOST;
const QWEN_MODEL = process.env.QWEN_MODEL || 'qwen3.5-flash';

// 邮件HTML生成系统Prompt
const SYSTEM_PROMPT = `You are an expert email HTML developer specializing in cross-client compatible email templates.

## CRITICAL RULES (Must Follow)
1. **Table Layout Only**: Use <table>, <tr>, <td> for ALL layout. NEVER use div, flex, grid, or float.
2. **Inline CSS Only**: All styles must be inline in style="" attributes. NO <style> tags, NO classes, NO IDs.
3. **Fixed Width**: Outer table must be width="600" with max-width="600px" centered for email client compatibility.
4. **NO External Images**: NEVER use placeholder images, external image URLs, or image services. Use colored table cells with text instead.
5. **Font Stack**: Use web-safe fonts with fallbacks: font-family: Arial, Helvetica, sans-serif.
6. **Outlook Support**: Add conditional comments for Outlook: <!--[if mso]>...<![endif]-->

## Image Handling (CRITICAL)
- **NEVER use any external image URLs** - no via.placeholder.com, no placeholder.com, no picsum.photos, etc.
- **For logos/branding**: Use a colored <td> with text:
  <td style="background-color:#3b82f6;color:#ffffff;padding:20px;text-align:center;font-size:24px;font-weight:bold;">Your Brand</td>

- **For hero/banner sections**: Use colored table cells with centered text:
  <td style="background:linear-gradient(135deg,#3b82f6,#1d4ed8);color:#ffffff;padding:60px 20px;text-align:center;">
    <h1 style="margin:0;font-size:32px;font-family:Arial,sans-serif;">Summer Sale!</h1>
    <p style="margin:10px 0 0;font-size:18px;">Get 30% Off All Products</p>
  </td>

- **For product grids**: Use colored boxes with text labels:
  <td style="background-color:#f3f4f6;padding:40px 20px;text-align:center;">
    <p style="margin:0 0 10px;font-size:14px;color:#374151;font-weight:bold;">Product Name</p>
    <p style="margin:0;font-size:16px;color:#ef4444;font-weight:bold;">$39.99</p>
  </td>

- **For product images in grids**: Use a colored square:
  <td style="background-color:#e5e7eb;width:150px;height:150px;text-align:center;vertical-align:middle;">
    <span style="font-size:12px;color:#6b7280;">Product Image</span>
  </td>

## Client-Specific Rules
- Outlook (Windows): No border-radius, no background-image, use cellpadding/cellspacing
- Gmail: Strips <style> tags and classes - rely only on inline styles
- Apple Mail: Good CSS support but still need table layout
- Mobile: Use percentage widths for fluid tables

## Color Palette Suggestions
- Primary Blue: #3b82f6, #2563eb, #1d4ed8
- Accent Red: #ef4444, #dc2626
- Neutral Gray: #f3f4f6, #e5e7eb, #6b7280, #374151
- White: #ffffff
- Success Green: #10b981

## Output Format
Return ONLY the complete HTML email code. No explanations, no markdown code blocks, just raw HTML starting with <!DOCTYPE html>.

## Email Structure Template
\`\`\`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Subject</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f4f4;">
        <tr>
            <td align="center" style="padding:20px 0;">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;">
                    <!-- Email content here - use colored cells, no external images -->
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
\`\`\``;

export async function POST(request: NextRequest) {
  try {
    // 调试：检查环境变量
    console.log('API Key exists:', !!QWEN_API_KEY);
    console.log('API Host:', QWEN_API_HOST);
    console.log('Model:', QWEN_MODEL);

    const { description, emailType } = await request.json();

    if (!description) {
      return NextResponse.json(
        { error: 'Description is required' },
        { status: 400 }
      );
    }

    if (!QWEN_API_KEY || !QWEN_API_HOST) {
      return NextResponse.json(
        { error: 'API configuration missing', key: !!QWEN_API_KEY, host: !!QWEN_API_HOST },
        { status: 500 }
      );
    }

    // 构建用户Prompt
    const userPrompt = `Create an email HTML template for the following:

Email Type: ${emailType || 'General'}
Description: ${description}

Requirements:
- Professional design suitable for business use
- Responsive and works on mobile devices
- Clean, modern aesthetic
- Clear call-to-action if appropriate
- Company branding area (logo placeholder)

Generate the complete HTML email code now.`;

    // 调用通义千问API (DashScope OpenAI 兼容模式)
    const response = await fetch(`${QWEN_API_HOST}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${QWEN_API_KEY}`,
      },
      body: JSON.stringify({
        model: QWEN_MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Qwen API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to generate email HTML', details: errorData },
        { status: 500 }
      );
    }

    const data = await response.json();
    const generatedHTML = data.choices?.[0]?.message?.content || data.output?.text || '';

    // 清理生成的HTML（移除可能的markdown代码块标记）
    const cleanHTML = generatedHTML
      .replace(/```html\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    return NextResponse.json({
      html: cleanHTML,
      model: QWEN_MODEL,
      usage: data.usage,
    });

  } catch (error: any) {
    console.error('Generate API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message, stack: error.stack },
      { status: 500 }
    );
  }
}
