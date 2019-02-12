const data = [
    {
        id: 1,
        subject: 'Invitation',
        from: 'ted@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: `Flannel chillwave next level yuccie. Meditation taxidermy meh tbh, brunch put a bird on it chia echo park pop-up sustainable kale chips selfies twee single-origin coffee. Tattooed pork belly tousled kitsch leggings gluten-free, crucifix brooklyn succulents. IPhone bushwick microdosing, pop-up migas irony small batch la croix cronut beard pabst keytar. You probably haven't heard of them marfa live-edge 3 wolf moon readymade meditation farm-to-table succulents messenger bag portland wayfarers scenester edison bulb. Salvia blue bottle kombucha, try-hard sartorial gochujang neutra pickled heirloom hammock. Salvia umami waistcoat shoreditch street art. Palo santo chambray lumbersexual pork belly, disrupt trust fund man braid locavore four dollar toast crucifix. Schlitz cornhole chia 90's flexitarian lomo post-ironic live-edge. Truffaut cronut small batch pickled edison bulb vexillologist shaman ugh. Oh. You need a little dummy text for your mockup? How quaint. I bet you’re still using Bootstrap too…`,
        read: true,
        type: 'inbox'
    },
    {
        id: 2,
        subject: 'Urgent Meeting',
        from: 'michael@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: false,
        type: 'inbox'
    },
    {
        id: 3,
        subject: 'Modal Changes',
        from: 'charlie@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: true,
        type: 'inbox'
    },
    {
        id: 4,
        subject: 'SCRUM Meeting',
        from: 'todd@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: false,
        type: 'draft'
    },
    {
        id: 5,
        subject: 'Daily Scrum',
        from: 'chris@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: true,
        type: 'trash'
    },
    {
        id: 6,
        subject: 'Sprint Review',
        from: 'robert@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: false,
        type: 'draft'
    },
    {
        id: 7,
        subject: 'Merge Request',
        from: 'gblake@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: false,
        type: 'trash'
    },
    {
        id: 8,
        subject: 'Pull Request',
        from: 'sasha@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: false,
        type: 'trash'
    },
    {
        id: 9,
        subject: 'Commit',
        from: 'leonard@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: false,
        type: 'trash'
    },
    {
        id: 10,
        subject: 'Merge Request',
        from: 'ronald@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: false,
        type: 'inbox'
    },
    {
        id: 11,
        subject: 'Initiate Development',
        from: 'daniel@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: false,
        type: 'inbox'
    },
    {
        id: 12,
        subject: 'Production Build',
        from: 'caroline@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: false,
        type: 'inbox'
    },
    {
        id: 13,
        subject: 'Merge Request',
        from: 'richard@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: false,
        type: 'inbox'
    },
    {
        id: 14,
        subject: 'Pull Request',
        from: 'robert@itexico.net',
        date: 'Mon Feb 11 2019 11:20:24 GMT-0600 (CST)',
        body: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh',
        read: false,
        type: 'draft'
    },
]

export default data;