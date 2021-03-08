const chartService = {
    memberDamage(knex) {
        return knex.raw(`
            select count(*), year(DateOfDamage) 
            from DamageData dd
            where dd.[Source] = 'Member'
            group by year(DateOfDamage)
            order by year(DateOfDamage);
        `)
    },

    excavatorDamage(knex) {
        return knex.raw(`
            select count(*), year(DateOfDamage) 
            from DamageData dd
            where dd.[Source] = 'Excavator'
            group by year(DateOfDamage)
            order by year(DateOfDamage);
        `)
    }
}

module.exports = chartService