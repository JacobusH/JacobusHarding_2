import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MLX } from 'app/models/_index';
import 'rxjs/add/operator/switchMap'
import * as firebase from 'firebase/app';

@Injectable()
export class MlxService {
  mlx: AngularFirestoreCollection<MLX>;
  // testimonialsActive: AngularFirestoreCollection<MLX>;
  // testimonialsFirst4: AngularFirestoreCollection<MLX>;
  
  constructor(private afs: AngularFirestore) { 
    this.mlx = this.afs.collection<MLX>('testimonials');
    // this.testimonialsActive = this.afs.collection<Testimonial>('testimonials', ref => ref.where('isActive', '==', true));
    // this.testimonialsFirst4 = this.afs.collection<Testimonial>('testimonials', ref => ref.limit(4));
  }

  createNew(): MLX {
    let data: MLX = {
      key: '',
      eventName: '',
      eventDate: '',
      mAmount: true,
      lAmount: new Date(),
      xAmount: new Date()
      };
      return data;
  }

  save(t: MLX): Promise<firebase.firestore.DocumentReference>  {
    let promise: Promise<firebase.firestore.DocumentReference> = this.mlx.add(t);
    promise.then(x => {
      x.update({key: x.id});
    });

    return promise;
  }

  edit(item: MLX): Promise<void> {
    return this.mlx.doc(item.key).update(item);
  }

  delete(item: MLX): Promise<void> {
    return this.mlx.doc(item.key).delete();
  }

}
