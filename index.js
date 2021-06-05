const { Client, Intents } = require('discord.js');
const { TOKEN } = require('./config.json');
const client = new Client({
    ws: {
        intents: Intents.ALL
    },
    fetchAllMembers: true
});

client.on('ready', () => {
    console.log('ready');

    const server = client.guilds.cache.get('777563209061236746');

    if (!server) return;

    const totalMemberChannel = server.channels.cache.get('850739392180125696');
    const humanChannel = server.channels.cache.get('850739543527391303');
    const partnerChannel = server.channels.cache.get('850739684388503552');

    const totalMember = server.members.cache.size;
    const hubmember = server.members.cache.filter(m => m.roles.cache.has('779018232891572265')).size;
    const partner = server.members.cache.filter(m => m.roles.cache.has('779016818446696538')).size;

    totalMemberChannel.edit({ name: `All the Cuties: ${totalMember.toLocaleString()}` });
    humanChannel.edit({ name: `Hub Members: ${hubmember.toLocaleString()}`});
    partnerChannel.edit({ name: `Partners: ${partner.toLocaleString()}`});
})

client.on('guildMemberAdd', member => {
    if (member.guild.id !== '777563209061236746') return;

    const totalMemberChannel = member.guild.channels.cache.get('850739392180125696');
    const humanChannel = member.guild.channels.cache.get('850739543527391303');
    const partnerChannel = member.guild.channels.cache.get('850739684388503552');

    const totalMember = member.guild.members.cache.size;
    const hubmember = member.guild.members.cache.filter(m => m.roles.cache.has('779018232891572265')).size;
    const partner = member.guild.members.cache.filter(m => m.roles.cache.has('779016818446696538')).size;

    totalMemberChannel.edit({ name: `All the Cuties: ${totalMember.toLocaleString()}` });
    humanChannel.edit({ name: `Hub Members: ${hubmember.toLocaleString()}`});
    partnerChannel.edit({ name: `Partners: ${partner.toLocaleString()}`});
});

client.on('guildMemberRemove', member => {
    if (member.guild.id !== '777563209061236746') return;

    const totalMemberChannel = member.guild.channels.cache.get('850739392180125696');
    const humanChannel = member.guild.channels.cache.get('850739543527391303');
    const partnerChannel = member.guild.channels.cache.get('850739684388503552');

    const totalMember = member.guild.members.cache.size;
    const hubmember = member.guild.members.cache.filter(m => m.roles.cache.has('779018232891572265')).size;
    const partner = member.guild.members.cache.filter(m => m.roles.cache.has('779016818446696538')).size;

    totalMemberChannel.edit({ name: `All the Cuties: ${totalMember.toLocaleString()}` });
    humanChannel.edit({ name: `Hub Members: ${hubmember.toLocaleString()}`});
    partnerChannel.edit({ name: `Partners: ${partner.toLocaleString()}`});
});


client.login(TOKEN);

//e
