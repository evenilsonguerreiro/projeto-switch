function verificar(){
    const tx1 = document.querySelector('#txtt1')
    const tx2 = document.querySelector('#txtt2')
    const res = document.querySelector('#res')
    const res2 = document.querySelector('#res2')

    let h1 = String(tx1.value)
    let h2 = String(tx2.value)
    
    let proficao = tx1.value;
    let nome = tx2.value;


    if(tx1.value === ''){
        alert('digite seu endereço')
        return
    } else if(tx2.value === ''){
        alert('digite seu nome')
        return
    }

    switch(proficao){
        case 'rua adalberto malveira' :
            res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
            res.innerHTML = 'POST0 DE SAÚDE : ALARICO LEITE  AREÁ 32'
            break;

            case 'rua jari':
                res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : ALARICO LEITE  AREÁ 32,'
                break; 
            
            case 'rua barroso':
                res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : ALARICO LEITE  AREÁ 32'
                break; 
            
            case 'rua nezita cabral':
                res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : ALARICO LEITE (SIQUEIRA) AREÁ 30'
                break; 

                case 'rua jasanaú':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : ALARICO LEITE '
                break;      
                
            case 'rua 1':
                res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : JOSÊ TEODOSIO (JARI)'
                break;  
                
                case 'rua 2':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : JOSÊ TEODOSIO (JARI)'
                break;  

                case 'rua 3':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POST0 DE SAÚDE : JOSÊ TEODOSIO (JARI)'
                break;  

                case 'rua 4':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : JOSÊ TEODOSIO (JARI)'

                break;  

                case 'rua 5':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : JOSÊ TEODOSIO (JARI)'
                break;
                
                case 'rua nereide':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : FERNANDO DIÓGENES.(granja portugal)'
                break;  

                case 'rua londrina':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : JOSÊ TEODOSIO.(granja portugal)'
                break;  

                case 'rua coronel fabriciano':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : FERNANDO DIÓGENES.(granja portugal)'
                break;  

                case 'rua josé abilio':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : FERNANDO DIÓGENES.(granja portugal)'
                break; 
                
                case 'rua viçosa maia':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485)'
                break;  

                case 'rua guarapari':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485)'
                break;  

                case 'rua leandro henrique':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485)'
                break;  

                case 'rua itapuan':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485)'
                break;  

                case 'rua costa do sol':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485)'
                break;  

                case 'rua santo antonio':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485)'
                break;  

                case 'rua padre panhando':
                    res2.innerHTML = `OLÁ ${nome} SUA UNIDADE É :   `
                res.innerHTML = 'POSTO DE SAÚDE : SIQUEIRA (AV eng-luiz montinegro -485)'
                break;  
            
            default :
            res.innerHTML = 'NÃO CONSEGUIMOS LOCALIZAR SUA UNIDADE DE SAÚDE'
            res.style.color = "red"
            
            
    }

    tx1.value = ''
    tx2.value = ''
    

    
}

