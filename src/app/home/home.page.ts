
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  items = [

    { name: 'yarn', description: 'Soft and durable yarn perfect for crocheting, knitting, and other DIY craft projects.', category: 'Yarn', rating: 4.5, price: 28, tag: 'SALE', img: 'https://m.media-amazon.com/images/I/91D9niisuPL.jpg' },
    { name: 'crochet key chain', description: 'A cute, handmade crochet keychain that adds a personal and stylish touch to your keys or bag.', category: 'Key Chain', rating: 4.5, price: 49, tag: 'HOT', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN20I22ikHxm_OhG25nxc-MQ2ePKs1qKEB0g&s' },
    { name: 'crochet top', description: 'A stylish, handmade crochet top that’s comfortable and breathable.', category: 'Top', rating: 3.5, price: 199, tag: 'NEW', img: 'https://hayhaycrochet.com/wp-content/uploads/2023/06/IMG_2190-1-1024x1024.jpeg' },
    { name: 'crochet bag', description: 'A handcrafted crochet bag that combines style and functionality.', category: 'Bag', rating: 4.5, price: 500, tag: 'SALE', img: 'https://www.mjsoffthehookdesigns.com/wp-content/uploads/2025/06/14-2-400x550.jpg' },
    { name: 'crochet blanket', description: 'A cozy, handmade crochet blanket that provides warmth and comfort.', category: 'Blanket', rating: 4.5, price: 349, tag: 'HOT', img: 'https://www.marymaxim.com/cdn/shop/files/IMG_6986.jpg?v=1715343105&width=1214' },
    { name: 'crochet hair tie', description: 'A soft crochet hair tie that gently holds your hair without pulling.', category: 'Hair Tie', rating: 4.5, price: 50, tag: 'NEW', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzFKUDMd9Y-E5D2nz3zk3G02HidvJ0ChmOg&s' },
   
  ];
}
