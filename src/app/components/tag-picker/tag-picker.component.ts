import { Component, ElementRef, ViewChild, forwardRef, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

type ITags = string[];

@Component({
  // tslint:disable-next-line:component-selector
  selector: "tag-picker",
  templateUrl: "./tag-picker.component.html",
  styleUrls: ["./tag-picker.component.less"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagPickerComponent),
      multi: true,
    },
  ],
})
export class TagPickerComponent implements ControlValueAccessor {
  innerValue: ITags = [];
  inputVisible = false;
  inputValue = "";
  @Input() disabled = false;
  @ViewChild("inputElement", { static: false }) inputElement?: ElementRef;

  public get value(): ITags {
    return this.innerValue;
  }

  public set value(v: ITags) {
    this.innerValue = v;
    this.onChange(v);
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  writeValue(v: any) {
    this.innerValue = v;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  showInput() {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  remove(tag: string) {
    this.value = this.innerValue.filter((item) => item !== tag);
  }

  confirm() {
    if (this.inputValue) {
      const idx = this.innerValue.indexOf(this.inputValue);
      if (idx === -1) {
        this.value = [...this.innerValue, this.inputValue];
      }
    }
    this.inputValue = "";
    this.inputVisible = false;
  }
}
