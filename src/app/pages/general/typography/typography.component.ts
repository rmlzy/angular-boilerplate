import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-typography",
  templateUrl: "./typography.component.html",
  styleUrls: ["./typography.component.less"],
})
export class TypographyComponent implements OnInit {
  code1 = `<h1>H1 Heading</h1>
<h2>H2 Heading</h2>
<h3>H3 Heading</h3>
<h4>H4 Heading</h4>
<h5>H5 Heading</h5>
<h6>H6 Heading</h6>`;
  code2 = `<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
<p>At vero eos et accusam et justo duo dolores et ea rebum.</p>`;
  code3 = `<abbr title="Internationalization">I18N</abbr>
<strong>Bold</strong>
<cite>Citation</cite>
<code>Hello World!</code>
<del>Deleted</del>
<em>Emphasis</em>
<i>Italic</i>
<ins>Inserted</ins>
<kbd>Ctrl + S</kbd>
<mark>Highlighted</mark>
<s>Strikethrough</s
<samp>Sample</samp>
Text <sub>Subscripted</sub>
Text <sup>Superscripted</sup>
<time>20:00</time>
<u>Underline</u>
<var>x</var> = <var>y</var> + 2`;
  code4 = `<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
<nz-divider nzPlain nzText="Rule text"></nz-divider>

<p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
<nz-divider nzPlain nzText="Rule text" nzOrientation="left"></nz-divider>

<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
<nz-divider nzPlain nzText="Rule text" nzOrientation="right"></nz-divider>

<p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>`;
  code5 = `<h5>Chinese</h5>
<p>汉字</p>
<h5>Japanese</h5>
<p>日本語の表記体系</p>
<h5>Korean</h5>
<p>한글</p>
<h5>Cyrillic</h5>
<p>Кириллица</p>
<h5>Greek</h5>
<p>Eλληνική</p>
<h5>Georgian</h5>
<p>ქართული დამწერლობა</p>
<h5>Armenian</h5>
<p>Հայերենի այբուբեն</p>
<h5>Arabic</h5>
<p>الحروف العربية</p>
<h5>Hebrew</h5>
<p>אלפבית עברי</p>
<h5>Thai</h5>
<p>อักษรไทย</p>`;

  constructor() {}

  ngOnInit(): void {}
}
