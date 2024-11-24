import { MovieItemProps } from "@/app/components/filmography/Filmography";

import netflixLogo from '@/assets/icons/logos_netflix.svg';
import youtubelogo from '@/assets/icons/logos_youtube.svg';
import primeLogo from '@/assets/icons/logos_prime.svg';

export const MOVIES : MovieItemProps[] = [
    {
        title: "A Quiet Monday",
        role: "Kamnonu",
        platform: youtubelogo,
        directors: "Dika Ofoma",
        link: "https://netflix.com",
        year: "2024"
    },
    {
        title: "Love Language",
        role: "Chioma",
        platform: youtubelogo,
        directors: "Uzoamaka Aniunoh",
        link: "https://netflix.com",
        year: "2023"
    },
    {
        title: "Venge",
        role: "Bibi",
        platform: netflixLogo,
        directors: "Multiple directors",
        link: "https://netflix.com",
        year: "2021"
    },
    {
        title: "A Naija Christmas",
        role: "Cassie",
        platform: primeLogo,
        directors: "Kunle Afolayan",
        link: "https://netflix.com",
        year: "2021"
    },
    {
        title: "Ponzi",
        role: "Abeke",
        platform: netflixLogo,
        directors: "Kayode Kasum",
        link: "https://netflix.com",
        year: "2021"
    },
    {
        title: "Riona",
        role: "Kumene",
        platform: netflixLogo,
        directors: "James Omokwe",
        link: "https://netflix.com",
        year: "2020"
    },
    {
        title: "Ìfé",
        role: "Ìfé",
        platform: youtubelogo,
        directors: "Uyaiedu Ikpe-Etim",
        link: "https://netflix.com",
        year: "2020"
    },
    {
        title: "Make it or Break it",
        role: "Simi",
        platform: youtubelogo,
        directors: "Molebi Ejuetami",
        link: "https://netflix.com",
        year: "2018"
    },
    {
        title: "Moms at War",
        role: "Bayo's Friend",
        platform: netflixLogo,
        directors: "Omoni Oboli",
        link: "https://netflix.com",
        year: "2018"
    },
    {
        title: "Shuga",
        role: "Cynthia",
        platform: youtubelogo,
        directors: "Tolu Ajayi, Tope Oshin",
        link: "https://netflix.com",
        year: "2017"
    }
]