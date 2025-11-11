// src/app/services/servicios.service.ts
import { Injectable } from '@angular/core';
import { Servicio } from '../models/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Netflix',
      tipo: 'streaming',
      descripcion: 'Películas y series en alta definición. Plan estándar.',
      precio: '$65/mes',
      color: '#E50914', // Rojo
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/200px-Netflix_icon.svg.png',
      enlaceWhatsApp: 'https://wa.me/5219602201806?text=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes',
      enlaceFacebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FPENDO%2F61581648359748%2F&quote=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes'
    },
    {
      id: 2,
      nombre: 'Disney+',
      tipo: 'streaming',
      descripcion: 'Contenido exclusivo de Disney, Marvel, Star Wars y National Geographic.',
      precio: '$50/mes',
      color: '#0063E5', // Azul
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/200px-Disney%2B_logo.svg.png',
      enlaceWhatsApp: 'https://wa.me/5219602201806?text=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes',
      enlaceFacebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FPENDO%2F61581648359748%2F&quote=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes'
    },
    {
      id: 3,
      nombre: 'HBO Max',
      tipo: 'streaming',
      descripcion: 'Series y películas premiadas de HBO, Warner Bros. y DC.',
      precio: '$50/mes',
      color: '#6C0BA9', // Morado
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/HBO_Max_Logo.svg/200px-HBO_Max_Logo.svg.png',
      enlaceWhatsApp: 'https://wa.me/5219602201806?text=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes',
      enlaceFacebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FPENDO%2F61581648359748%2F&quote=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes'
    },
    {
      id: 4,
      nombre: 'Prime Video',
      tipo: 'streaming',
      descripcion: 'Películas, series y envíos gratuitos con Amazon Prime.',
      precio: '$55/mes',
      color: '#1F7FE4', // Azul claro
      imagen: 'https://th.bing.com/th/id/OIP.xLspjTTq5ofgPJ0Fq8U9wQHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      enlaceWhatsApp: 'https://wa.me/5219602201806?text=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes',
      enlaceFacebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FPENDO%2F61581648359748%2F&quote=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes'
    },
    {
      id: 5,
      nombre: 'Spotify',
      tipo: 'música',
      descripcion: 'Millones de canciones y podcasts sin anuncios.',
      precio: '$50/mes',
      color: '#1DB954', // Verde
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/200px-Spotify_logo_without_text.svg.png',
      enlaceWhatsApp: 'https://wa.me/5219602201806?text=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes',
      enlaceFacebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FPENDO%2F61581648359748%2F&quote=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes'
    },
    {
      id: 6,
      nombre: 'Apple TV+',
      tipo: 'streaming',
      descripcion: 'Contenido original de Apple, películas y series exclusivas.',
      precio: '$50/mes',
      color: '#A8A9AD', // Gris
      imagen: 'https://www.simplymac.com/wp-content/uploads/apple-tv-plus-logo.webp',
     enlaceWhatsApp: 'https://wa.me/5219602201806?text=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes',
      enlaceFacebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FPENDO%2F61581648359748%2F&quote=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes'
    },
    {
      id: 7,
      nombre: 'Paramount+',
      tipo: 'streaming',
      descripcion: 'Películas, series y contenido en vivo de Paramount.',
      precio: '$67/mes',
      color: '#00539B', // Azul oscuro
      imagen: 'https://lrmonline.com/wp-content/uploads/2023/07/maxresdefault.jpg',
      enlaceWhatsApp: 'https://wa.me/5219602201806?text=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes',
      enlaceFacebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FPENDO%2F61581648359748%2F&quote=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes'
    },
    {
      id: 8,
      nombre: 'YouTube Premium',
      tipo: 'streaming',
      descripcion: 'Videos sin anuncios, música y contenido exclusivo.',
      precio: '$70/mes',
      color: '#FF0000', // Rojo
      imagen: 'https://pngteam.com/images/youtube_premium_logo_transparent__9-703x322_4ea47154_transparent.png',
      enlaceWhatsApp: 'https://wa.me/5219602201806?text=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes',
      enlaceFacebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FPENDO%2F61581648359748%2F&quote=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes'
    },
    {
      id: 9,
      nombre: 'Crunchyroll',
      tipo: 'streaming',
      descripcion: 'Anime, manga y contenido asiático exclusivo.',
      precio: '$45/mes',
      color: '#F47521', // Naranja
      imagen: 'https://logos-world.net/wp-content/uploads/2021/04/Crunchyroll-Logo.jpg',
      enlaceWhatsApp: 'https://wa.me/5219602201806?text=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes',
      enlaceFacebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FPENDO%2F61581648359748%2F&quote=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes'
    },
    {
      id: 10,
      nombre: 'Star+',
      tipo: 'streaming',
      descripcion: 'Deportes, series y películas de Disney para adultos.',
      precio: '$50/mes',
      color: '#FFD700', // Amarillo
      imagen: 'https://surtido.pe/wp-content/uploads/2021/05/Star_logo-scaled.jpg',
      enlaceWhatsApp: 'https://wa.me/5219602201806?text=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes',
      enlaceFacebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FPENDO%2F61581648359748%2F&quote=Hola,%20me%20interesa%20contratar%20Netflix%20por%20$65/mes'
      
    }
  ];

  obtenerServicios(): Servicio[] {
    return this.servicios;
  }
}
