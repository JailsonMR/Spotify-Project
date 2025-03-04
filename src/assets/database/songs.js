const songsArray = [
    {
        image: "https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24",
        name: "Ultima Saudade - Ao Vivo",
        duration: "2:30",
        artist: "Henrique & Juliano",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
        id: 1,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0243b8175fa2a49802d338c823",
        name: "Namoradeira",
        duration: "2:45",
        artist: "MC Tuto",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 2,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e029c07b7b05b5f88f967885b73",
        name: "Sosseguei",
        duration: "3:10",
        artist: "Jorge & Mateus",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 3,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0254952473489279b9a9f73319",
        name: "Love Gostosinho",
        duration: "2:50",
        artist: "NATTAN",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 4,
    },
        {
        image: "https://i.scdn.co/image/ab67616d00001e0259f2010b9a84a6c253c0631f",
        name: "Envolver",
        duration: "3:20",
        artist: "Anitta",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 5,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0269f2010b9a84a6c253c0631f",
        name: "Novo Balanço",
        duration: "2:55",
        artist: "Veigh",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 6,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0279f2010b9a84a6c253c0631f",
        name: "Morena",
        duration: "3:05",
        artist: "Luan Santana",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 7,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0289f2010b9a84a6c253c0631f",
        name: "Hear Me Now",
        duration: "3:15",
        artist: "Alok",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 8,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0299f2010b9a84a6c253c0631f",
        name: "Largado às Traças",
        duration: "3:30",
        artist: "Zé Neto & Cristiano",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 9,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e02a9f2010b9a84a6c253c0631f",
        name: "Kenny G",
        duration: "3:00",
        artist: "Matuê",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 10,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e02b9f2010b9a84a6c253c0631f",
        name: "X1",
        duration: "2:40",
        artist: "MC Cabelinho",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 11,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e02c9f2010b9a84a6c253c0631f",
        name: "Maldivas",
        duration: "3:25",
        artist: "Ludmilla",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 12,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e02d9f2010b9a84a6c253c0631f",
        name: "Bloqueado",
        duration: "3:10",
        artist: "Gusttavo Lima",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 13,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e02e9f2010b9a84a6c253c0631f",
        name: "Leão",
        duration: "2:55",
        artist: "Marília Mendonça",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 14,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e02f9f2010b9a84a6c253c0631f",
        name: "Camarote",
        duration: "3:35",
        artist: "Wesley Safadão",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 15,
    },
        {
        image: "https://i.scdn.co/image/ab67616d00001e0219f2010b9a84a6c253c0631f",
        name: "Tá OK",
        duration: "2:45",
        artist: "Dennis DJ",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 16,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0229f2010b9a84a6c253c0631f",
        name: "Dançarina",
        duration: "3:05",
        artist: "Pedro Sampaio",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 17,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0239f2010b9a84a6c253c0631f",
        name: "Evoluiu",
        duration: "2:50",
        artist: "Kevin o Chris",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 18,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0249f2010b9a84a6c253c0631f",
        name: "Casei Com a Putaria",
        duration: "3:20",
        artist: "MC Ryan SP",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 19,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0259f2010b9a84a6c253c0631f",
        name: "Poesia Acústica #11: Nada Mudou",
        duration: "4:10",
        artist: "Tz da Coronel",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 20,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0269f2010b9a84a6c253c0631f",
        name: "Bombonzinho",
        duration: "2:45",
        artist: "Israel & Rodolffo",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 21,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0279f2010b9a84a6c253c0631f",
        name: "Mal Feito - Ao Vivo",
        duration: "3:00",
        artist: "Hugo & Guilherme",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 22,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0289f2010b9a84a6c253c0631f",
        name: "Zona de Perigo",
        duration: "2:55",
        artist: "Léo Santana",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 23,
    },
    {
        image: "https://i.scdn.co/image/ab67616d00001e0299f2010b9a84a6c253c0631f",
        name: "Pipoco",
        duration: "3:10",
        artist: "Ana Castela",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 24,
    },
        {
        image: "https://i.scdn.co/image/ab67616d00001e02a9f2010b9a84a6c253c0631f",
        name: "Termina Comigo Antes",
        duration: "3:20",
        artist: "Gustavo Mioto",
        audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3", // Substitua pela URL real
        id: 25,
    },
];