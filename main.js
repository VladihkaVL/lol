const Discord = require('discord.js') // подключение библиотеки                  Видео про бота https://youtu.be/1lzPIhTaPDY
const client = new Discord.Client() // создание клиента

client.on('ready', () =>{ // ивент, когда бот запускается https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-ready
    client.generateInvite("ADMINISTRATOR").then(invite => console.log(`Ссылка на добавление ${invite}`))
    console.log(`Привет! ${client.user.tag} запустился!`) // информация в консоль про успешный запуск
})

client.on('message', message =>{ // ивент, когда приходит любое сообщение в чат https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
    if (message.author.bot) return; // если автор сообщения - бот, ничего не происходит 
    if (message.content == '!профіль') { // если пользователь написал "!профиль" 
    let embed = new Discord.MessageEmbed() // создание ембед сообщения
    .setTitle(message.author.username) // в тайтле имя автора 
    let status = ''
    switch (message.author.presence.status) { // проверка статусов 
        case 'online':
            status = 'онлайн'; break; 
            case 'idle':
                status = ':orange_circle:немає на місці'; break;
                case 'offline':
                    status = 'ні в мережі'; break;
                    case 'dnd':
                        status = ':red_circle:не турбувати'; break;
    }
    embed.setDescription(`**Ваш дискорд Айді: ${message.author.id}
    Ваш статус: ${status}
    Дата створення облікового запису: ${message.author.createdAt.toLocaleDateString()}
    Дата входу на сервер: ${message.member.joinedAt.toLocaleDateString()}
    **`) // описание ембеда
    .setColor('RANDOM') // рандомный цвет ембеда
    .setThumbnail(message.author.avatarURL()) // вставляем в ембед аватарку пользователя
    message.channel.send(embed) // отправляем сообщение в канал где была написана команда   
    }
})

client.on('messageDelete', message =>{ // ивент, когда удаляется любое сообщение с сервера https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
    let embed = new Discord.MessageEmbed()
    .setTitle('Було видалено повідомлення!')
    .setColor('RANDOM')
    .addField(`Віддалене повідомлення:`, message.content, true)
    .addField("Автор:",`${message.author.tag} (${message.author})`,true)
    .addField("Канал:", `${message.channel}`, false)
    .setFooter(' - ',`${message.author.avatarURL()}`)
    .setTimestamp(message.createdAt);
  client.channels.cache.get("1114648515147218987").send(embed); // айди вашего канала с логами
})

client.on('guildMemberAdd', member =>{ // ивент, когда пользователь присоединяется к серверу https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
    let embed = new Discord.MessageEmbed()
    .setThumbnail(member.user.avatarURL())
    .setTitle(`Привіт, ${member.user.username}!`)
    .setDescription(`**Зайшов до нас ахуеть!
    Ти наш \`${client.guilds.get("1114250864589295776").memberCount}\` учасник! **`) // айди вашего сервера               !!!!!!!!!!
    .setFooter('Будь завжди на позитиві ))', 'https://cdn.discordapp.com/emojis/590614597610766336.gif?v=1')
    // .addField(`Участвуй в розыгрышах!`, `<#706487236220289054>`, true) // Добавляйте свои каналы по желанию
    // .addField(`Общайся в чате!`, `<#702364684199788625>`, true)
    // .addField(`Смотри видео наших ютуберов!`, `<#702363551184060546>`, true)
    .setColor('RANDOM')
     // отправка сообщения в лс 

    let embed2 = new Discord.MessageEmbed()
    .setThumbnail(member.user.avatarURL())
    .setTitle(`Зайшов до нас ахуеть!`)
    .addField('Користувач:', member.user)
    .setColor('RANDOM')
    member.send(embed);
    client.channels.cache.get('1114648515147218987').send(embed2) // айди вашего канала с логами
})

client.on('guildMemberRemove', member => { // ивент, когда пользователь выходит с сервера https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
    let embed = new Discord.MessageEmbed()
    .setThumbnail(member.user.avatarURL())
    .setTitle(`зник безвісти`)
    .addField('Користувач:', member.user)
    .setColor('RANDOM')
    member.send(embed);
    client.channels.cache.get('1114250865507827813').send(embed) // айди вашего канала с логами
  })

async function change() {
    let members = client.guilds.cache.get("1114250864589295776").memberCount // сколько людей на сервере + указать айди своего сервера
    client.channels.cache.get("1114989054463856780").setName(`На сервере: ${members}`); // свой айди войса
}

var interval = setInterval(function () { change(); }, 20000  ); // время обновления в миллисекундах

client.login('MTE0MTM2MDE0MzkxNzkyMDMxNw.GGyuGS.F_uN1ax5sUX5WF8UjoI2L2HA4vkwqBMkDVe2Z8') // токен вашего бота

// Хотите, чтобы ваш бот работал 24/7 бесплатно? Смотрите это видео: https://www.youtube.com/watch?v=wxdl4QK0am4

// Bot by Sanich https://youtube.com/sanich - фишки, гайды по приложению Discord