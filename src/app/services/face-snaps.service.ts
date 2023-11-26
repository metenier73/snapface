import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Pulsatille des alpes',
      description: 'Une fleur commestible !',
      imageUrl: 'https://live.staticflickr.com/65535/52673354543_297fc79658_k.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 2,
      title: 'Orchis tacheté',
      description: 'Une orchidée.',
      imageUrl: 'https://live.staticflickr.com/65535/52672357437_9c110ce02b_w.jpg',
      createdDate: new Date(),
      snaps: 6,
      location: 'Arc 1800'
    },
    {
      id: 3,
      title: 'Orchis noir',
      description: 'Une orchidée !',
      imageUrl: 'https://live.staticflickr.com/65535/52672357532_c1641aa07f_w.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 4,
      title: 'Orchis moustique',
      description: 'Une orchidée !',
      imageUrl: 'https://live.staticflickr.com/65535/52672357617_579b3ff6a3_w.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 5,
      title: 'Orchis brulé',
      description: 'Une orchidée !',
      imageUrl: 'https://live.staticflickr.com/65535/52673148664_9312d899de_w.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 6,
      title: 'Orchis à large feuille',
      description: 'Une orchidée !',
      imageUrl: 'https://live.staticflickr.com/65535/52673355033_5446a52638_w.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 7,
      title: 'Joubarbe des toits',
      description: 'Une joubarbe !',
      imageUrl: 'https://live.staticflickr.com/65535/52673355053_57bdf85b68_w.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 8,
      title: 'Joubarbe à toile d araignée',
      description: 'Une joubarbe !',
      imageUrl: 'https://live.staticflickr.com/65535/52673148724_d41b142227_w.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 9,
      title: 'Gentiane des neiges',
      description: 'Une gentiane !',
      imageUrl: 'https://live.staticflickr.com/65535/52672357832_38c061b6b7_w.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 10,
      title: 'Fausse camomille',
      description: 'Une camomille !',
      imageUrl: 'https://live.staticflickr.com/65535/52672858051_1cbdd8bcf9_k.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 11,
      title: 'Epilobe en épis',
      description: 'Une épilobe !',
      imageUrl: 'https://live.staticflickr.com/65535/52673293225_d3d5d0f5e3_k.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 12,
      title: 'étoile jaune de liottard',
      description: 'Une étoile !',
      imageUrl: 'https://live.staticflickr.com/65535/52673149289_f160891278_w.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 13,
      title: 'edelweiss',
      description: 'Une orchidée !',
      imageUrl: 'https://live.staticflickr.com/65535/52672357122_bf877c6abc_w.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 14,
      title: 'digitale jaune',
      description: 'Une digitale !',
      imageUrl: 'https://live.staticflickr.com/65535/52673293945_5ee5ae0301_k.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    },
    {
      id: 15,
      title: 'digitale à grandes fleurs',
      description: 'Une digitale !',
      imageUrl: 'https://live.staticflickr.com/65535/52673358478_29dc028f76_k.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Arc 1800'
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void {
    const faceSnap: FaceSnap = {
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
  }
}
