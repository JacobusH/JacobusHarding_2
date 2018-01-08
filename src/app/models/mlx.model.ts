// export class Testimonial { 
  
//         constructor(
//           public key:string = '',
//           public name:string = '',
//           public descriptionHTML: string = '',
//           public qualifications: string = '',
//           public instrument: string = '',
//           public itemUrl: string = '',
//           public isActive: boolean = true,
//           public createdAt: Date = new Date(),
//           public updatedAt: Date = new Date()
//         ) {}
//     }
    
export interface MLX {
  key: string,
  eventName: string,
  eventDate: Date,
  artists: Array<string>,
  mAmount: number,
  lAmount: number,
  xAmount: number
}