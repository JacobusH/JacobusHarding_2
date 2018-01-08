import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MLX } from 'app/models/_index';
import { MLXService } from 'app/services/_index';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm
} from '@angular/forms';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mlx-tracker',
  templateUrl: './mlx-tracker.component.html',
  styleUrls: ['./mlx-tracker.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MLXTrackerComponent implements OnInit {
  private model = this.mlxService.createNew();
  selectedMLX: MLX;
  private mlxs: Observable<{}[]>;

  constructor(private mlxService: MLXService) { 
    this.mlxs = this.mlxService.mlxs.valueChanges();
  }

  ngOnInit() {
  }

  saveMLX(form: NgForm) {
    // uploading new item with picture
    if(this.selectedMLX == null) {
      this.mlxService.save(this.model)
      this.model = this.mlxService.createNew();
      form.reset();
    }
    // editing mlx
    else {
      this.mlxService.edit(this.selectedMLX)
      form.reset();
    }
  }

  setNewMLX() {
    this.selectedMLX = null;
    this.model = this.mlxService.createNew();
  }

  setSelectedMLX(test: MLX) {
    this.selectedMLX = test;
    this.model = test;
  }

  deleteMLX(form: NgForm) {
    form.reset();
    this.mlxService.delete(this.selectedMLX);
  }

}
