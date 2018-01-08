import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MLX } from 'app/models/_index';
import 'rxjs/add/operator/switchMap'
import * as firebase from 'firebase/app';

@Injectable()
export class MLXService {
  mlxs: AngularFirestoreCollection<MLX>;
  // testimonialsActive: AngularFirestoreCollection<MLX>;
  // testimonialsFirst4: AngularFirestoreCollection<MLX>;
  
  constructor(private afs: AngularFirestore) { 
    this.mlxs = this.afs.collection<MLX>('testimonials');
    // this.testimonialsActive = this.afs.collection<Testimonial>('testimonials', ref => ref.where('isActive', '==', true));
    // this.testimonialsFirst4 = this.afs.collection<Testimonial>('testimonials', ref => ref.limit(4));
  }

  createNew(): MLX {
    let data: MLX = {
      key: '',
      eventName: '',
      eventDate: new Date(),
      artists: new Array,
      mAmount: 0,
      lAmount: 0,
      xAmount: 0
      };
      return data;
  }

  save(t: MLX): Promise<firebase.firestore.DocumentReference>  {
    let promise: Promise<firebase.firestore.DocumentReference> = this.mlxs.add(t);
    promise.then(x => {
      x.update({key: x.id});
    });

    return promise;
  }

  edit(item: MLX): Promise<void> {
    return this.mlxs.doc(item.key).update(item);
  }

  delete(item: MLX): Promise<void> {
    return this.mlxs.doc(item.key).delete();
  }

}
