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
3. **Fixed Width**: Outer table must be width="600" or max-width="600px" for email client compatibility.
4. **Image Requirements**: All <img> must have width, height, alt, border="0", style="display:block".
5. **Font Stack**: Use web-safe fonts with fallbacks: font-family: Arial, Helvetica, sans-serif.
6. **Outlook Support**: Add conditional comments for Outlook: <!--[if mso]>...<![endif]-->

## Client-Specific Rules
- Outlook (Windows): No border-radius, no background-image, use cellpadding/cellspacing
- Gmail: Strips <style> tags and classes - rely only on inline styles
- Apple Mail: Good CSS support but still need table layout
- Mobile: Use media queries sparingly, focus on fluid tables

## Output Format
Return ONLY the complete HTML email code. No explanations, no markdown code blocks, just raw HTML starting with <!DOCTYPE html>.

## Email Structure Template
\`\`\`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Email Subject]</title>
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
<body style="margin:0;padding:0;background-color:#f4f4f4;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
            <td align="center" style="padding:20px 0;">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color:#ffffff;">
                    <!-- Email content here -->
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

    // 调用通义千问API (DashScope)
    const response = await fetch(`${QWEN_API_HOST}/api/v1/services/aigc/text-generation/generation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${QWEN_API_KEY}`,
      },
      body: JSON.stringify({
        model: QWEN_MODEL,
        input: {
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: userPrompt }
          ]
        },
        parameters: {
          temperature: 0.7,
          max_tokens: 4000,
          result_format: 'message'
        }
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
    const generatedHTML = data.output?.choices?.[0]?.message?.content || data.output?.text || '';

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
