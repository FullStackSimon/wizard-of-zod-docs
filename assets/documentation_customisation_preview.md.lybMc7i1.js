import{_ as r,a as o}from"./chunks/preview_cards_light.8B_xIEks.js";import{_ as n,a as p}from"./chunks/preview_list_light.BONpebLL.js";import{_ as d}from"./chunks/props_preview_table_dark.oukwmz5E.js";import{_ as l}from"./chunks/preview_table_light.tpe-iiwT.js";import{_ as h,c,a1 as i,j as s,a as t,G as m,B as u,o as g}from"./chunks/framework.CsjMFbrD.js";const v="/wizard-of-zod-docs/assets/preview_cards_title_description_dark.6jwVzYwK.png",k="/wizard-of-zod-docs/assets/preview_cards_title_description_light.Ba3zeVde.png",$=JSON.parse('{"title":"Preview","description":"","frontmatter":{"title":"Preview"},"headers":[],"relativePath":"documentation/customisation/preview.md","filePath":"documentation/customisation/preview.md","lastUpdated":1738503419000}'),w={name:"documentation/customisation/preview.md"},b=o,f=v,E=p,y=d,_={id:"cards-preview",tabindex:"-1"};function P(C,e,q,F,x,B){const a=u("Badge");return g(),c("div",null,[e[3]||(e[3]=i('<h1 id="preview" tabindex="-1">Preview <a class="header-anchor" href="#preview" aria-label="Permalink to &quot;Preview&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>After completing all forms and ensuring all fields are valid, users are presented with a <strong>Preview</strong> screen. This allows them to review their inputs and make any necessary amendments before final submission.</p><h2 id="choosing-a-preview-type" tabindex="-1">Choosing a Preview Type <a class="header-anchor" href="#choosing-a-preview-type" aria-label="Permalink to &quot;Choosing a Preview Type&quot;">​</a></h2><p>The wizard supports a configurable <a href="./../api/props.html#preview">preview</a> prop, which determines how the preview is displayed. The available options are:</p><table tabindex="0"><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><code>&#39;cards&#39;</code></td><td>Displays preview data in a card-based layout (default).</td></tr><tr><td><code>&#39;list&#39;</code></td><td>Shows preview data in a simple list format.</td></tr><tr><td><code>&#39;table&#39;</code></td><td>Structures preview data in a tabular format for a more structured view.</td></tr></tbody></table>',6)),s("h3",_,[e[0]||(e[0]=t("Cards Preview ")),m(a,{type:"info",text:"default"}),e[1]||(e[1]=t()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#cards-preview","aria-label":'Permalink to "Cards Preview <Badge type="info" text="default" />"'},"​",-1))]),e[4]||(e[4]=i('<p>The <strong>cards</strong> preview displays each form’s data in a separate card with structured content. Users can see their answers grouped neatly with optional titles and descriptions.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Wizard</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> preview</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cards&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p><em><strong>Without</strong></em> <a href="./../api/props.html#title">Form.title</a> and <a href="./../api/props.html#description">Form.description</a>:</p><picture><source srcset="'+b+'" media="(prefers-color-scheme: dark)"><img src="'+r+'" alt="Card Preview" class="img-border"></picture><p><em><strong>With</strong></em> <a href="./../api/props.html#title">Form.title</a> and <a href="./../api/props.html#description">Form.description</a>:</p><picture><source srcset="'+f+'" media="(prefers-color-scheme: dark)"><img src="'+k+'" alt="Card Preview With Title and Description" class="img-border"></picture><h3 id="list-preview" tabindex="-1">List Preview <a class="header-anchor" href="#list-preview" aria-label="Permalink to &quot;List Preview&quot;">​</a></h3><p>The <strong>list</strong> preview presents each question and answer in a straightforward, readable format. It is useful for minimalistic designs where compactness is preferred.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Wizard</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> preview</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><picture><source srcset="'+E+'" media="(prefers-color-scheme: dark)"><img src="'+n+'" alt="List Preview" class="img-border"></picture><h3 id="table-preview" tabindex="-1">Table Preview <a class="header-anchor" href="#table-preview" aria-label="Permalink to &quot;Table Preview&quot;">​</a></h3><p>The <strong>table</strong> preview organizes form data into a structured table layout, making it easier to scan large amounts of information at a glance.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Wizard</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> preview</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;table&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><picture><source srcset="'+y+'" media="(prefers-color-scheme: dark)"><img src="'+l+'" alt="Table Preview" class="img-border"></picture><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>The <a href="./../api/props.html#preview">preview</a> prop provides flexibility in presenting user-entered data before final submission. Whether using the default <strong>cards</strong>, <strong>list</strong>, or <strong>table</strong> preview, <strong>Wizard of Zod</strong> ensures a seamless review process before submission.</p>',16))])}const N=h(w,[["render",P]]);export{$ as __pageData,N as default};
