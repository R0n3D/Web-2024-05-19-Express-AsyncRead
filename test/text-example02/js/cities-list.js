const decorations = ['🌟','🪷','🌻','🌸','🍀','💮','🍁']

const citiesList = [
    {
        cityName: 'Netania',
        country: 'Israel',
        image: './img/netania.jpg'
    },
    {
        cityName: 'Kobe',
        country: 'Japan',
        image: './img/kobe.jpg'
    },
    {
        cityName: 'Kutna-Hora',
        country: 'Czechia',
        image: './img/kutna-hora.jpg'
    },
    {
        cityName: 'Manaus',
        country: 'Brazil',
        image: './img/manaus.jpg'
    },
    {
        cityName: 'Maceio',
        country: 'Brazil',
        image: './img/maceio.jpg'
    },
    {
        cityName: 'London',
        country: 'United Kingdom',
        image: './img/london.jpeg',
        isCapital: true
    },
    {
        cityName: 'Liverpool',
        country: 'United Kingdom',
        image: './img/liverpool.jpeg'
    },
    {
        cityName: 'Kyoto',
        country: 'Japan',
        image: './img/kyoto.jpeg'
    },
    {
        cityName: 'Agadir',
        country: 'Morocco',
        image: './img/agadir.jpeg'
    },
    {
        cityName: 'Plzen',
        country: 'Czechia',
        image: './img/plzen.jpeg'
    },
    {
        cityName: 'Prague',
        country: 'Czechia',
        image: './img/prague.jpg',
        isCapital: true
    },
    {
        cityName: 'Porto-Velho',
        country: 'Brazil',
        image: './img/porto-velho.jpeg'
    },
    {
        cityName: 'Quarzazate',
        country: 'Morocco',
        image: './img/quarzazate.jpeg'
    },
    {
        cityName: 'Rabat',
        country: 'Morocco',
        image: './img/rabat.jpeg',
        isCapital: true
    },
    {
        cityName: 'Asilah',
        country: 'Morocco',
        image: './img/asilah.jpeg'
    },
    {
        cityName: 'Sao-Luis',
        country: 'Brazil',
        image: './img/sao-luis.jpg'
    },
    {
        cityName: 'Sderot',
        country: 'Israel',
        image: './img/sderot.jpeg'
    },
    {
        cityName: 'Takayama',
        country: 'Japan',
        image: './img/takayama.jpg'
    },
    {
        cityName: 'Sapporo',
        country: 'Japan',
        image: './img/sapporo.jpg'
    },
    {
        cityName: 'Salvador',
        country: 'Brazil',
        image: './img/salvador.jpg'
    },
    {
        cityName: 'Safed',
        country: 'Israel',
        image: './img/safed.jpeg'
    },
    {
        cityName: 'Rosh-Pina',
        country: 'Israel',
        image: './img/rosh-pina.jpeg'
    },
    {
        cityName: 'Rishon-le-Zion',
        country: 'Israel',
        image: './img/rishon-le-zion.jpeg'
    },
    {
        cityName: 'Rio-de-Janeiro',
        country: 'Brazil',
        image: './img/rio-de-janeiro.jpg'
    },
    {
        cityName: 'Recife',
        country: 'Brazil',
        image: './img/recife.jpg'
    },
    {
        cityName: 'Rechovot',
        country: 'Israel',
        image: './img/rechovot.jpeg'
    },
    {
        cityName: 'Ceasaria',
        country: 'Israel',
        image: './img/ceasaria.jpeg'
    },
    {
        cityName: 'Nottingham',
        country: 'United Kingdom',
        image: './img/nottingham.jpeg'
    },
    {
        cityName: 'Petach-Tikva',
        country: 'Israel',
        image: './img/petach-tikva.jpeg'
    },
    {
        cityName: 'Osaka',
        country: 'Japan',
        image: './img/osaka.jpg'
    },
    {
        cityName: 'Newcastle',
        country: 'United Kingdom',
        image: './img/newcastle.jpeg'
    },
    {
        cityName: 'Nara',
        country: 'Japan',
        image: './img/nara.jpg'
    },
    {
        cityName: 'Casablanca',
        country: 'Morocco',
        image: './img/casablanca.jpeg'
    },
    {
        cityName: 'Yehud',
        country: 'Israel',
        image: './img/yehud.jpeg'
    },
    {
        cityName: 'Beer-Sheva',
        country: 'Israel',
        image: './img/beer-sheva.jpeg'
    },
    {
        cityName: 'Tokyo',
        country: 'Japan',
        image: './img/tokyo.jpg',
        isCapital: true
    },
    {
        cityName: 'Tiberia',
        country: 'Israel',
        image: './img/tiberia.jpeg'
    },
    {
        cityName: 'Arad',
        country: 'Israel',
        image: './img/arad.jpeg'
    },
    {
        cityName: 'Telc',
        country: 'Czechia',
        image: './img/telc.jpg'
    },
    {
        cityName: 'Beit-Shean',
        country: 'Israel',
        image: './img/beit-shean.jpeg'
    },
    {
        cityName: 'Manchester',
        country: 'United Kingdom',
        image: './img/manchester.jpeg'
    },
    {
        cityName: 'Ashquelon',
        country: 'Israel',
        image: './img/ashquelon.jpeg'
    },
    {
        cityName: 'Beit-Shemesh',
        country: 'Israel',
        image: './img/beit-shemesh.jpeg'
    },
    {
        cityName: 'Bnei-Brak',
        country: 'Israel',
        image: './img/bnei-brak.jpeg'
    },
    {
        cityName: 'Meknes',
        country: 'Morocco',
        image: './img/meknes.jpeg'
    },
    {
        cityName: 'Nagasaki',
        country: 'Japan',
        image: './img/nagasaki.jpg'
    },
    {
        cityName: 'Naharia',
        country: 'Israel',
        image: './img/naharia.jpeg'
    },
    {
        cityName: 'Matsue',
        country: 'Japan',
        image: './img/matsue.jpg'
    },
    {
        cityName: 'Modiin',
        country: 'Israel',
        image: './img/modiin.jpeg'
    },
    {
        cityName: 'Metula',
        country: 'Israel',
        image: './img/metula.jpeg'
    },
    {
        cityName: 'Mitzpe-Ramon',
        country: 'Israel',
        image: './img/mitzpe-ramon.jpeg'
    },
    {
        cityName: 'Marrakech',
        country: 'Morocco',
        image: './img/marrakech.jpeg'
    },
    {
        cityName: 'Bristol',
        country: 'United Kingdom',
        image: './img/bristol.jpeg'
    },
    {
        cityName: 'Fes',
        country: 'Morocco',
        image: './img/fes.jpeg'
    },
    {
        cityName: 'Chefchaouen',
        country: 'Morocco',
        image: './img/chefchaouen.jpeg'
    },
    {
        cityName: 'Eilat',
        country: 'Israel',
        image: './img/eilat.jpeg'
    },
    {
        cityName: 'Dimona',
        country: 'Israel',
        image: './img/dimona.jpeg'
    },
    {
        cityName: 'Kanazawa',
        country: 'Japan',
        image: './img/kanazawa.jpg'
    },
    {
        cityName: 'Jerusalem',
        country: 'Israel',
        image: './img/jerusalem.jpg',
        isCapital: true
    },
    {
        cityName: 'Ashdod',
        country: 'Israel',
        image: './img/ashdod.jpg'
    },
    {
        cityName: 'Karlovy-Vary',
        country: 'Czechia',
        image: './img/karlovy-vary.jpg'
    },
    {
        cityName: 'Katzrin',
        country: 'Israel',
        image: './img/katzrin.jpeg'
    },
    {
        cityName: 'Kiriat-Arba',
        country: 'Israel',
        image: './img/kiriat-arba.jpeg'
    },
    {
        cityName: 'Hiroshima',
        country: 'Japan',
        image: './img/hiroshima.jpg'
    },
    {
        cityName: 'Cesky-Krumlov',
        country: 'Czechia',
        image: './img/cesky-krumlov.jpg'
    },
    {
        cityName: 'Haifa',
        country: 'Israel',
        image: './img/haifa.jpeg'
    },
    {
        cityName: 'Ceske-Budejovice',
        country: 'Czechia',
        image: './img/ceske-budejovice.jpg'
    },
    {
        cityName: 'Brno',
        country: 'Czechia',
        image: './img/brno.jpg'
    },
    {
        cityName: 'Fortaleza',
        country: 'Brazil',
        image: './img/fortaleza.jpg'
    },
    {
        cityName: 'Fukuoka',
        country: 'Japan',
        image: './img/fukuoka.jpg'
    },
    {
        cityName: 'Belem',
        country: 'Brazil',
        image: './img/belem.jpg'
    },
    {
        cityName: 'Brasilia',
        country: 'Brazil',
        image: './img/brasilia.jpg',
        isCapital: true
    },
]