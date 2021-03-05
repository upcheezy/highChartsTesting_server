const chartService = {
    damageInfo(knex) {
        return knex.raw(`
            select count(*), year(DateOfDamage), month(DateOfDamage)
            from DamageData dd
            group by year(DateOfDamage), month(DateOfDamage)
            order by year(DateOfDamage), month(DateOfDamage);
        `)
    }
}

module.exports = chartService