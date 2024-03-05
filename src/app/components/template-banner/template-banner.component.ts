import { Component } from '@angular/core';

@Component({
  selector: 'app-template-banner',
  standalone: true,
  imports: [],
  template: `
    <main class="flex animate-fade min-h-[100vh] w-[100vw]">
      <section class="w-full lg:w-5/12 flex flex-col p-[2rem]">
          <ng-content></ng-content>
      </section>
      <div class="flex-grow banner"></div>
    </main>
  `,
  styleUrl: './template-banner.component.css'
})
export class TemplateBannerComponent {

}
