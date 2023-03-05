const buttons = ['Описание', 'Характеристики', 'Свойства']

const farmProductsPromo = [
    {
        img: 'https://i.ibb.co/w7JJh1s/eat1.png',
        farmProduct: 'Фермерские продукты',
        title: 'Еда намного вкуснее',
        isGood: true,
        description:
            'Домашняя колбаса из мяса, соли и специй и колбаса из магазина - два настолько разных продукта, что они даже не родственники',
    },
    {
        img: 'https://i.ibb.co/HNv31Gv/garbage1.png',
        farmProduct: 'Магазинные продкуты',
        title: 'Просроченные продукты',
        isGood: false,
        description:
            'Из-за большого количества товара сотрудники магазинов не успевают своевременно производить замену товара',
    },
    {
        img: 'https://i.ibb.co/0VjnjT8/no-meat1.png',
        farmProduct: 'Фермерские продукты',
        title: 'Натуральные продукты',
        isGood: true,
        description:
            'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений',
    },
    {
        img: 'https://i.ibb.co/zJydRfz/sprout1.png',
        farmProduct: 'Магазинные продукты',
        title: 'Некачественное мясо',
        isGood: false,
        description:
            'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
    },
];

const product = [
    {
        id: 0,
        url: 'https://www.ozon.ru/product/konfety-rot-front-eco-botanica-brusnika-moroshka-s-rastitelnym-ekstraktom-i-vitaminami-200-g-261926526',
        src: 'https://ir.ozone.ru/s3/multimedia-8/wc1000/6067348556.jpg',
        title: 'Желейные конфеты Eco Botanica',
        description: 'Желейные конфеты Eco Botanica со вкусом северной природы: терпкая брусника и нежная морошка слились в освежающий ягодный коктейль. В меру сладкие, с легкой кислинкой, конфеты Эко Ботаника содержат витаминный комплекс (А, Е, В1, В2, В6, PP, фолиевая кислота, пантотеновая кислота, биотин, В12) и растительные экстракты. Сочный перекус и польза северных ягод в каждой мармеладке!',
        specifications: {
                type: 'Конфеты',
                brand: 'Eco Botanica',
                weight: '200',
            },
        property: {
                energyValue: '310',
                proteins: '1',
                fats: '0.3',
                carbohydrates: '75',
            },
        price: '67',
    },
    {
        id: 1,
        url: 'https://www.ozon.ru/product/maslo-ghi-kisloslivochnoe-iz-skvashennyh-derevenskih-slivok-toplenoe-baytler-zhirnost-99-200-353882766',
        src: 'https://ir.ozone.ru/s3/multimedia-z/wc1000/6127747043.jpg',
        title: 'Масло ГХИ кисломолочное',
        description: 'Изготовлено из высококачественного натурального сливочного масла, сделанного из молока коров пасущихся на лугах и не получающих гормон роста. Не содержит искусственных красителей и ароматизаторов.',
        specifications: {
                type: 'Топленое масло',
                brand: 'Baytler',
                weight: '160',
            },
        property: {
                energyValue: null,
                proteins: null,
                fats: null,
                carbohydrates: null,
            },
        price: '367',
    },
    {
        id: 2,
        url: 'https://www.ozon.ru/product/pasta-kokosovaya-dopdrops-urbech-iz-myakoti-kokosa-bez-dobavok-1000-g-614066884',
        src: 'https://ir.ozone.ru/s3/multimedia-t/wc1000/6346465829.jpg',
        title: 'Паста Кокосовая DopDrops',
        description: 'Мякоть индонезийского кокоса смолота без нагрева в мягкий крем для сохранения пользы и нежного аромата этого натурального продукта. Кокос для пасты DopDrops выращивается на берегах Индийского океана и поэтому он богат морскими минералами, необходимыми для поддержания здоровья нашего организма, а полезные жирные кислоты укрепляют иммунитет, память и помогают пищеварению.',
        specifications: {
                type: 'Кокосовая паста, Ореховая паста',
                brand: 'DopDrops',
                weight: '1000',
            },
        property: {
                energyValue: '660',
                proteins: '13',
                fats: '65',
                carbohydrates: '5',
            },
        price: '467',
    },
    {
        id: 3,
        url: 'https://www.ozon.ru/product/pastila-bez-sahara-yagodnyy-miks-assorti-malina-klubnika-oblepiha-smorodina-bez-sahara-258989957',
        src: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6221347262.jpg',
        title: 'Пастила без сахара ягодный микс',
        description: 'Микс из ягодной пастилы без сахара: малиновая, клубничная, облепиховая и смородиновая готовится по особой технологии, сушится при t 35-42С до тонкой и мягкой консистенции. Фруктовое пюре усыхает в 6 раз, делая каждый кусочек концентрировано вкусным.',
        specifications: {
                type: 'Пастила, Фруктовые пастилки',
                brand: 'PastiLab',
                weight: '250',
            },
        property: {
                energyValue: '226',
                proteins: '2,5',
                fats: '0,2',
                carbohydrates: '53,7',
            },
        price: '324',
    },
    {
        id: 4,
        url: 'https://www.ozon.ru/product/zefir-eco-botanica-malina-s-karkade-i-vitaminom-135-g-184276485',
        src: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6084713952.jpg',
        title: 'Зефир Eco Botanica Малина',
        description: 'Зефир без сахара Эко Ботаника с экстрактом каркаде и витаминами. Яркий малиновый аромат, воздушная текстура, мягкий сладкий вкус, благодаря проверенным временем подсластителям – изомальту, сорбиту и мальтиту. Рекомендуется употреблять не больше 1-2 зефиринок в сутки, так как при чрезмерном употреблении подсластители могут оказывать легкий слабительный эффект. ',
        specifications: {
                type: 'Зефир',
                brand: 'Eco Botanica',
                weight: '135',
            },
        property: {
                energyValue: '200',
                proteins: '1',
                fats: '0',
                carbohydrates: '81',
            },
        price: '93',
    },
    {
        id: 5,
        url: 'https://www.ozon.ru/product/kedrovye-orehi-ochishchennye-500gr-svezhiy-urozhay-2022-pravilnoe-pitanie-552521012',
        src: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6496471944.jpg',
        title: 'Кедровые орехи очищенные',
        description: 'Кедровые орехи в вакуумной упаковке 500гр. Очищенные кедровые орехи непременно пригодятся всем, кто заботится о своем здоровье и любит создавать настоящие кулинарные шедевры. Качественный живой продукт - удачная покупка. Свежий сладковатый орешек с нежным ароматом. Ядра отсортированы и откалиброваны по цвету и размеру.',
        specifications: {
                type: 'Орехи',
                brand: null,
                weight: '500',
            },
        property: {
                energyValue: '680',
                proteins: '15',
                fats: '56',
                carbohydrates: '28',
            },
        price: '680',
    },
    {
        id: 6,
        url: 'https://www.ozon.ru/product/nastoyashchiy-krasnyy-chay-karkade-gibiskus-tselnyy-200-g-ceremony-carcade-hibiscus-red-221204212',
        src: 'https://ir.ozone.ru/s3/multimedia-u/wc1000/6193305198.jpg',
        title: 'Настоящий Красный Чай Каркаде',
        description: 'Каркадэ (Гибискус) Цельный - необычный травяной напиток из высушенных цветков и лепестков суданской розы, которая относится к роду гибискусов. Более популярен каркаде в странах Африки. Египтяне называли его напитком фараона, дарующим бессмертие и силу. Они считали, что заварка восстанавливает энергию и утоляет жажду во время сильной жары.',
        specifications: {
                type: 'Чай листовой',
                brand: 'Ceremony',
                weight: '200',
            },
        property: {
                energyValue: null,
                proteins: null,
                fats: null,
                carbohydrates: null,
            },
        price: '342',
    },
    {
        id: 7,
        url: 'https://www.ozon.ru/product/semena-tykvy-ochishchennye-500-gr-semechka-tykvennaya-ochishchennaya-tykvennye-664783119',
        src: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6224202910.jpg',
        title: 'Семена тыквы очищенные',
        description: 'Тыквенные семечки настоящий кладезь витаминов, минералов и других полезных веществ. Они улучшают деятельность головного мозга, налаживают работу кровеносной системы, лечат простатит и воспаления предстательной железы, различные болезни почек и мочевого пузыря. Тыквенные семечки богаты витаминами А и Е, которые отвечают за молодость кожи, здоровье ногтей и волос.',
        specifications: {
                type: 'Семечки',
                brand: 'NOYER',
                weight: '500',
            },
        property: {
                energyValue: '556',
                proteins: '30',
                fats: '49',
                carbohydrates: '4,7',
            },
        price: '402',
    },
    {
        id: 8,
        url: 'https://www.ozon.ru/product/nastoyashchiy-kitayskiy-chay-matcha-kokteylnaya-zelenaya-100-g-poroshkovyy-ceremony-matcha-green-185434890',
        src: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6397705898.jpg',
        title: 'Китайский Чай Матча Коктейльная',
        description: 'Для изготовления коктейльного сорта собирают оставшиеся чайные листья с нижней части куста, после сбора для высших сортов. Вкус терпкий с ярко-выраженной горечью, если пить в чистом виде. Именно поэтому она предназначена для использования в основном в кулинарии и для приготовлений коктейлей, что придает блюдам и напиткам фирменный вкус матчи и отлично подходит в качестве натурального красителя.',
        specifications: {
                type: 'Чай растворимый',
                brand: 'Ceremony',
                weight: '100',
            },
        property: {
                energyValue: null,
                proteins: null,
                fats: null,
                carbohydrates: null,
            },
        price: '246',
    },
    {
        id: 9,
        url: 'https://www.ozon.ru/product/psillium-sheluha-semyan-podorozhnika-250-gr-superfud-kletchatka-dlya-pohudeniya-304976448',
        src: 'https://ir.ozone.ru/s3/multimedia-x/wc1000/6373115625.jpg',
        title: 'Псиллиум (шелуха семян подорожника)',
        description: 'Псиллиум цельный (шелуха семян подорожника) - это идеальная добавка к йогуртам, кефиру, супам-пюре. Прекрасно подходит для разведения в воде. Польза псиллиума: идеальное средство для похудения, утоляет голод и дарит чувство сытости на длительный срок / на 75% состоит из растворимой клетчатки, помогающей нормализовать микрофлору кишечника / улучшает углеводный обмен / предупреждает развитие сахарного диабета / выводит из организма все шлаки и токсины / помогает избежать изжоги и повышенной кислотности / защищает от образования атеросклероза',
        specifications: {
                type: 'Клетчатка',
                brand: 'Narmak',
                weight: '250',
            },
        property: {
                energyValue: '42',
                proteins: '2,9',
                fats: '0,1',
                carbohydrates: '7,3',
            },
        price: '383',
    },
]

export {farmProductsPromo, product, buttons}