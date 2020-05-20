const moviesMock = [
    {
        "id": "c8482e16-6582-42c2-807d-c79ca9a061ce",
        "title": "Café Chino",
        "year": 2001,
        "cover": "http://dummyimage.com/235x161.jpg/5fa2dd/ffffff",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "duration": 1982,
        "contentRating": "R",
        "source": "http://dyndns.org/quam/pede/lobortis/ligula.html",
        "tags": [
            "Western",
            "Drama",
            "Documentary",
            "Crime|Drama|Thriller"
        ]
    },
    {
        "id": "62ebff4b-563e-4fa2-81e3-df99c4d56730",
        "title": "Crime After Crime",
        "year": 2007,
        "cover": "http://dummyimage.com/103x101.jpg/cc0000/ffffff",
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "duration": 1927,
        "contentRating": "PG",
        "source": "http://ibm.com/nec/nisi/volutpat.js",
        "tags": [
            "Drama|Romance",
            "Comedy|Crime|Drama|Western",
            "Drama",
            "Comedy|Romance"
        ]
    },
    {
        "id": "dddf27b7-5cbd-44a6-8855-80f222e7c860",
        "title": "Fiend with the Electronic Brain (Blood of Ghastly Horror)",
        "year": 1995,
        "cover": "http://dummyimage.com/177x204.png/dddddd/000000",
        "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "duration": 1904,
        "contentRating": "PG",
        "source": "https://chicagotribune.com/lacinia/eget/tincidunt/eget.jsp",
        "tags": [
            "Comedy|Crime",
            "Adventure|Drama|Thriller",
            "Action|Crime"
        ]
    },
    {
        "id": "4c945ef4-4816-4328-93d4-59f708d25d84",
        "title": "Idiots, The (Idioterne)",
        "year": 1999,
        "cover": "http://dummyimage.com/167x206.jpg/cc0000/ffffff",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        "duration": 1950,
        "contentRating": "G",
        "source": "https://google.co.uk/feugiat/et.aspx",
        "tags": [
            "Drama",
            "Drama|Horror|Thriller",
            "Drama|War"
        ]
    },
    {
        "id": "a81bda2c-cd2f-474b-8059-4d10e716ee85",
        "title": "Empire",
        "year": 2003,
        "cover": "http://dummyimage.com/231x206.jpg/5fa2dd/ffffff",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "duration": 1862,
        "contentRating": "R",
        "source": "https://npr.org/eget/tempus/vel.jsp",
        "tags": [
            "Documentary",
            "Comedy|Crime",
            "Comedy|Crime|Drama",
            "Action|Drama|War"
        ]
    },
    {
        "id": "82d1f416-7080-4da2-8eb6-eb160de8f777",
        "title": "Thompsons, The",
        "year": 1995,
        "cover": "http://dummyimage.com/201x115.jpg/dddddd/000000",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "duration": 1862,
        "contentRating": "G",
        "source": "http://techcrunch.com/metus/arcu.png",
        "tags": [
            "Comedy|Romance",
            "Comedy"
        ]
    },
    {
        "id": "ec92daee-058f-4062-ba77-c31e508ad69e",
        "title": "Penguin Pool Murder",
        "year": 1999,
        "cover": "http://dummyimage.com/225x231.jpg/cc0000/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "duration": 1998,
        "contentRating": "G",
        "source": "https://freewebs.com/vestibulum/sagittis/sapien/cum/sociis/natoque.png",
        "tags": [
            "Adventure|Drama|War",
            "Thriller",
            "Crime|Horror|Sci-Fi",
            "Adventure|Sci-Fi"
        ]
    },
    {
        "id": "22b821c6-7701-4bfe-9fd7-69dbd96629b4",
        "title": "Wicker Man, The",
        "year": 1986,
        "cover": "http://dummyimage.com/222x147.jpg/ff4444/ffffff",
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "duration": 2018,
        "contentRating": "G",
        "source": "http://typepad.com/in.png",
        "tags": [
            "Action|Animation|Horror",
            "Action|Adventure",
            "Drama",
            "Drama",
            "Drama"
        ]
    },
    {
        "id": "05e32f2e-f180-47e9-b951-cdc3324b4b5a",
        "title": "Russell Peters: Outsourced",
        "year": 2005,
        "cover": "http://dummyimage.com/138x146.jpg/cc0000/ffffff",
        "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "duration": 1905,
        "contentRating": "R",
        "source": "http://example.com/nulla/pede/ullamcorper/augue/a/suscipit.json",
        "tags": [
            "Comedy|Drama|Musical"
        ]
    },
    {
        "id": "f9a242a1-ce4d-4c9d-b9b4-ebd13b4229ec",
        "title": "Boat Trip",
        "year": 2000,
        "cover": "http://dummyimage.com/163x230.jpg/5fa2dd/ffffff",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "duration": 1901,
        "contentRating": "PG",
        "source": "http://admin.ch/nec/nisi/volutpat/eleifend/donec/ut.jpg",
        "tags": [
            "Drama|Romance"
        ]
    },
    {
        "id": "3686ea40-8d08-4845-8885-6b7037ca45c7",
        "title": "Who Killed the Electric Car?",
        "year": 2008,
        "cover": "http://dummyimage.com/109x220.jpg/ff4444/ffffff",
        "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "duration": 1862,
        "contentRating": "PG-13",
        "source": "https://ca.gov/nunc/commodo/placerat/praesent/blandit/nam/nulla.aspx",
        "tags": [
            "Comedy|Drama|Musical",
            "Documentary"
        ]
    },
    {
        "id": "c62b0477-e1a8-4e2b-86b7-ea94f4c445b7",
        "title": "Reconstruction",
        "year": 2002,
        "cover": "http://dummyimage.com/206x116.png/dddddd/000000",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "duration": 2010,
        "contentRating": "G",
        "source": "http://amazon.co.jp/ultrices/posuere/cubilia.png",
        "tags": [
            "Action|Comedy|Horror",
            "Drama",
            "Action|Mystery|Thriller"
        ]
    },
    {
        "id": "11072f3f-99fd-44de-84e4-72a3fddc967e",
        "title": "Air Bud",
        "year": 1969,
        "cover": "http://dummyimage.com/218x207.bmp/cc0000/ffffff",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "duration": 1891,
        "contentRating": "PG-13",
        "source": "https://mozilla.org/dolor/quis/odio/consequat.jsp",
        "tags": [
            "Crime|Horror"
        ]
    },
    {
        "id": "aaa389d0-cf0b-42c5-a200-1980a5c4f22b",
        "title": "Simple Twist of Fate, A",
        "year": 2012,
        "cover": "http://dummyimage.com/100x144.bmp/dddddd/000000",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "duration": 1856,
        "contentRating": "NC-17",
        "source": "http://psu.edu/vivamus/tortor/duis/mattis/egestas/metus/aenean.json",
        "tags": [
            "Horror|Mystery",
            "Crime|Drama|Thriller"
        ]
    },
    {
        "id": "80baedda-594e-42b2-b1ab-42dfb66bd360",
        "title": "The Last Round",
        "year": 1986,
        "cover": "http://dummyimage.com/103x193.png/dddddd/000000",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "duration": 1959,
        "contentRating": "PG-13",
        "source": "https://ft.com/nisi.aspx",
        "tags": [
            "Action|Crime|Drama|Thriller",
            "Drama|Thriller|War",
            "Comedy|Crime"
        ]
    }
];

module.exports = {
    moviesMock
}

