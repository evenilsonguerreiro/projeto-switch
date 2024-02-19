const tx1 = document.querySelector('#txtt1')
const tx2 = document.querySelector('#txtt2')
const res = document.querySelector('#res')
const res2 = document.querySelector('#res2')



function verificar(){

    let h1 = String(tx1.value)
    let h2 = String(tx2.value)
    
    let endereço = tx1.value;
    let nome = tx2.value;


    if(tx1.value === ''){
        alert('digite seu endereço')
        return
    } else if(tx2.value === ''){
        alert('digite seu nome')
        return
    }

    switch(endereço){
        case 'rua adalberto malveira' :
            res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
            res.innerHTML = 'POST0 DE SAÚDE : ALARICO LEITE . horario de 08h ás 17hs'
            break;

                case 'rua jari':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : ALARICO LEITE horario de 08h ás 17hs,'
                break; 
            
                case 'rua barroso':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : ALARICO LEITE,horario de 08h ás 17hs'
                break; 
            
                case 'rua nezita cabral':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : ALARICO LEITE, horario de 08h ás 17hs'
                break; 

                case 'rua jasanaú':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : ALARICO LEITE, horario de 08h ás 17hs '
                break;      
                
                case 'rua 1':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : JOSÊ TEODOSIO (JARI)'
                break;  
                
                case 'rua 2':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : JOSÊ TEODOSIO (JARI) horario de 08h ás 17hs'
                break;  

                case 'rua 3':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : JOSÊ TEODOSIO (JARI) horario de 08h ás 17hs'
                break;  

                case 'rua 4':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : JOSÊ TEODOSIO (JARI) horario de 08h ás 17hs'

                break;  

                case 'rua 5':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : JOSÊ TEODOSIO (JARI) horario de 08h ás 17hs'
                break;
                
                case 'rua nereide':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : FERNANDO DIÓGENES.(granja portugal)horario de 08h ás 17hs'
                break;  

                case 'rua londrina':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : JOSÊ TEODOSIO.(granja portugal)horario de 08h ás 17hs'
                break;  

                case 'rua coronel fabriciano':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : FERNANDO DIÓGENES.(granja portugal)horario de 08h ás 17hs'
                break;  

                case 'rua josé abilio':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : FERNANDO DIÓGENES.(granja portugal)horario de 08h ás 17hs'
                break; 
                
                case 'rua viçosa maia':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485)horario de 08h ás 17hs'
                break;  

                case 'rua guarapari':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485) horario de 08h ás 17hs'
                break;  

                case 'rua leandro henrique':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485) horario de 08h ás 17hs'
                break;  

                case 'rua itapuan':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485) horario de 08h ás 17hs'
                break;  

                case 'rua costa do sol':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485) horario de 08h ás 17hs'
                break;  

                case 'rua santo antonio':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485) horario de 08h ás 17hs'
                break;  

                case 'rua padre panhando':
                res2.innerHTML = `OLÁ ${nome}! SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485) horario de 08h ás 17hs'
                break;  
            
            default :
            res.innerHTML = 'NÃO CONSEGUIMOS LOCALIZAR SUA UNIDADE DE SAÚDE'
            res.style.color = "red"       
    }

    tx1.value = ''
    tx2.value = ''
    

    
}

