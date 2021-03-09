const chartService = {
    memberDamage(knex, year) {
        return knex.raw(`
        select count(*), 
        year(DateOfDamage), 
            case when month(DateOfDamage) = 1 then 'January'
                when month(DateOfDamage) = 2 then 'February'
                when month(DateOfDamage) = 3 then 'March'
                when month(DateOfDamage) = 4 then 'April'
                when month(DateOfDamage) = 5 then 'May'
                when month(DateOfDamage) = 6 then 'June'
                when month(DateOfDamage) = 7 then 'July'
                when month(DateOfDamage) = 8 then 'August'
                when month(DateOfDamage) = 9 then 'September'
                when month(DateOfDamage) = 10 then 'October'
                when month(DateOfDamage) = 11 then 'November'
                when month(DateOfDamage) = 12 then 'December'
            end as damage_date
        from DamageData dd
        where dd.[Source] = 'Member' and year(DateOfDamage) = ${year}
        group by year(DateOfDamage), month(DateOfDamage)
        order by year(DateOfDamage), month(DateOfDamage);
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