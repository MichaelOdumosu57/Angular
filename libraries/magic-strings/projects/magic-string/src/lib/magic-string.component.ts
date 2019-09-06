import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nk-magic-string',
  template: `
    <input type="text" (keydown.enter) = "markText($event.target.value)"/>
    <div #content [hidden]="true">
        <ng-content></ng-content>
    </div>
    <div [innerHTML]="controlledContent"></div>
  `,
  styles: ['.mark {background-color:yellow}'],
//   encapsulation:ViewEncapsulation.None
})
export class MagicStringComponent implements OnInit {
    
    @ViewChild('content',{read:ViewContainerRef}) content: ElementRef;
    
    originalContent:string;
    controlledContent:string;
    
    constructor() { }

    ngOnInit() {
        this.controlledContent = this.originalContent = this.content.nativeElement.textContent
        this.controlledContent = this.originalContent.replace(new Regexp(value,'g'),`<span class ="mark>$(value)</span>`)
    }
    
    markText(value:any){
        console.log(any)
    }

}

// hide content render something else

// use ViewChild to help look at DOM element telplates in
    //second can read or override it or use extra API
    
//to hide an element    <div  [hidden]="true">