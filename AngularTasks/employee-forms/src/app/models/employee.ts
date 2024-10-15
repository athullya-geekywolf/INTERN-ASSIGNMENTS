import { FormControl, FormGroup } from "@angular/forms";

export interface IEmployee{
    firstname:FormControl<string|null>;
    lastname:FormControl<string|null>;
    email:FormControl<string|null>;
    pNumber:FormControl<number|null>;
    project:FormControl<string|null>;
    address:FormGroup<{
        address1:FormControl<string|null>;
        address2:FormControl<string|null>;
        city:FormControl<string|null>;
    }>

}