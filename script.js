let massive=['баскетбол', 'волейбол', 'шахмати', 'стритбол', 'бокс']

 document.write('Я люблю ')

massive.forEach(function(sport, index){
    if(index === massive.length - 1) {
        document.write('и ' + sport + '.')
    }
    else if(index === massive.length - 2){
       document.write(sport + ' ')
    }
    else {
        document.write(sport + ',')
    }
})