import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CascaderComponent } from './cascader/cascader.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormComponent } from './form/form.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { MentionComponent } from './mention/mention.component';
import { RadioComponent } from './radio/radio.component';
import { RateComponent } from './rate/rate.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SwitchComponent } from './switch/switch.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { TransferComponent } from './transfer/transfer.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'cascader', component: CascaderComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'date-picker', component: DatePickerComponent },
  { path: 'form', component: FormComponent },
  { path: 'input', component: InputComponent },
  { path: 'input-number', component: InputNumberComponent },
  { path: 'mention', component: MentionComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'rate', component: RateComponent },
  { path: 'select', component: SelectComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'time-picker', component: TimePickerComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'tree-select', component: TreeSelectComponent },
  { path: 'upload', component: UploadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntryRoutingModule {}
