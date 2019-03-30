export default function insertManaSymbols(cardproperty) {
    // console.log('card-property: ', cardproperty);
    if(cardproperty) {
        let manaString = cardproperty;
        let manaString2 = cardproperty;
        if(cardproperty.includes('{W}')) {
            while(manaString2.includes('{W}')){
                manaString = manaString.replace('{W}', '<img src="../../assets/white-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{U}')) {
            while(manaString2.includes('{U}')) {
                manaString = manaString.replace('{U}', '<img src="../../assets/blue-mana.svg">');
                manaString2 = manaString;
            }    
        }
        
        if(cardproperty.includes('{R}')) {
            while(manaString2.includes('{R}')) {
                manaString = manaString.replace('{R}', '<img src="../../assets/red-mana.svg">');
                manaString2 = manaString;
            }    
        }
        
        if(cardproperty.includes('{G}')) {
            while(manaString2.includes('{G}')) {
                manaString = manaString.replace('{G}', '<img src="../../assets/green-mana.svg">');
                manaString2 = manaString;
            }    
        }
        
        if(cardproperty.includes('{B}')) {
            while(manaString2.includes('{B}')) {
                manaString = manaString.replace('{B}', '<img src="../../assets/black-mana.svg">');
                manaString2 = manaString;
            }    
        }
        
        if(cardproperty.includes('{S}')) {
            while(manaString2.includes('{S}')) {
                manaString = manaString.replace('{S}', '<img src="../../assets/snow-mana.svg">');
                manaString2 = manaString;
            }    
        }

        if(cardproperty.includes('{C}')) {
            while(manaString2.includes('{C}')) {
                manaString = manaString.replace('{C}', '<img src="../../assets/snow-mana.svg">');
                manaString2 = manaString;
            }    
        }
        
        if(cardproperty.includes('{1}')) {
            while(manaString2.includes('{1}')) {
                manaString = manaString.replace('{1}', '<img src="../../assets/one-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{2}')) {
            while(manaString2.includes('{2}')) {
                manaString = manaString.replace('{2}', '<img src="../../assets/two-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{3}')) {
            while(manaString2.includes('{3}')) {
                manaString = manaString.replace('{3}', '<img src="../../assets/three-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{4}')) {
            while(manaString2.includes('{4}')) {
                manaString = manaString.replace('{4}', '<img src="../../assets/four-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{5}')) {
            while(manaString2.includes('{5}')) {
                manaString = manaString.replace('{5}', '<img src="../../assets/five-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{6}')) {
            while(manaString2.includes('{6}')) {
                manaString = manaString.replace('{6}', '<img src="../../assets/six-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{7}')) {
            while(manaString2.includes('{7}')) {
                manaString = manaString.replace('{7}', '<img src="../../assets/seven-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{8}')) {
            while(manaString2.includes('{8}')) {
                manaString = manaString.replace('{8}', '<img src="../../assets/eight-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{9}')) {
            while(manaString2.includes('{9}')) {
                manaString = manaString.replace('{9}', '<img src="../../assets/nine-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{10}')) {
            while(manaString2.includes('{10}')) {
                manaString = manaString.replace('{10}', '<img src="../../assets/ten-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{11}')) {
            while(manaString2.includes('{11}')) {
                manaString = manaString.replace('{11}', '<img src="../../assets/eleven-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{12}')) {
            while(manaString2.includes('{12}')) {
                manaString = manaString.replace('{12}', '<img src="../../assets/twelve-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{13}')) {
            while(manaString2.includes('{13}')) {
                manaString = manaString.replace('{13}', '<img src="../../assets/thirteen-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{14}')) {
            while(manaString2.includes('{14}')) {
                manaString = manaString.replace('{14}', '<img src="../../assets/fourteen-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{15}')) {
            while(manaString2.includes('{15}')) {
                manaString = manaString.replace('{15}', '<img src="../../assets/fifteen-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{16}')) {
            while(manaString2.includes('{16}')) {
                manaString = manaString.replace('{16}', '<img src="../../assets/sixteen-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{17}')) {
            while(manaString2.includes('{17}')) {
                manaString = manaString.replace('{17}', '<img src="../../assets/seventeen-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{18}')) {
            while(manaString2.includes('{18}')) {
                manaString = manaString.replace('{18}', '<img src="../../assets/eighteen-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{19}')) {
            while(manaString2.includes('{19}')) {
                manaString = manaString.replace('{19}', '<img src="../../assets/nineteen-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{20}')) {
            while(manaString2.includes('{20}')) {
                manaString = manaString.replace('{20}', '<img src="../../assets/twenty-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{U/B}')) {
            while(manaString2.includes('{U/B}')) {
                manaString = manaString.replace('{U/B}', '<img src="../../assets/blue-or-black-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{U/R}')) {
            while(manaString2.includes('{U/R}')) {
                manaString = manaString.replace('{U/R}', '<img src="../../assets/blue-or-red-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{W/U}')) {
            while(manaString2.includes('{W/U}')) {
                manaString = manaString.replace('{W/U}', '<img src="../../assets/white-or-blue-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{W/B}')) {
            while(manaString2.includes('{W/B}')) {
                manaString = manaString.replace('{W/B}', '<img src="../../assets/white-or-black-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{B/R}')) {
            while(manaString2.includes('{B/R}')) {
                manaString = manaString.replace('{B/R}', '<img src="../../assets/black-or-red-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{B/G}')) {
            while(manaString2.includes('{B/G}')) {
                manaString = manaString.replace('{B/G}', '<img src="../../assets/black-or-green-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{R/G}')) {
            while(manaString2.includes('{R/G}')) {
                manaString = manaString.replace('{R/G}', '<img src="../../assets/red-or-green-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{R/W}')) {
            while(manaString2.includes('{R/W}')) {
                manaString = manaString.replace('{R/W}', '<img src="../../assets/red-or-white-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{G/W}')) {
            while(manaString2.includes('{G/W}')) {
                manaString = manaString.replace('{G/W}', '<img src="../../assets/green-or-white-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{G/B}')) {
            while(manaString2.includes('{G/B}')) {
                manaString = manaString.replace('{G/B}', '<img src="../../assets/green-or-blue-mana.svg">');
                manaString2 = manaString;
            }
        }
        
        if(cardproperty.includes('{2/B}')) {
            while(manaString2.includes('{2/B}')) {
                manaString = manaString.replace('{2/B}', '<img src="../../assets/two-or-black-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{2/U}')) {
            while(manaString2.includes('{2/U}')) {
                manaString = manaString.replace('{2/U}', '<img src="../../assets/two-or-blue-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{2/G}')) {
            while(manaString2.includes('{2/G}')) {
                manaString = manaString.replace('{2/G}', '<img src="../../assets/two-or-green-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{2/R}')) {
            while(manaString2.includes('{2/R}')) {
                manaString = manaString.replace('{2/R}', '<img src="../../assets/two-or-red-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{2/W}')) {
            while(manaString2.includes('{2/W}')) {
                manaString = manaString.replace('{2/W}', '<img src="../../assets/two-or-white-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{1000000}')) {
            manaString = manaString.replace('{1000000}', '<img src="../../assets/one-million-mana.svg">');
        }

        if(cardproperty.includes('{100}')) {
            manaString = manaString.replace('{100}', '<img src="../../assets/one-hundred-mana.svg">');
        }

        if(cardproperty.includes('{100}')) {
            manaString = manaString.replace('{100}', '<img src="../../assets/one-hundred-mana.svg">');
        }

        if(cardproperty.includes('{T}')) {
            manaString = manaString.replace('{T}', '<img src="../../assets/tap.svg">');
        }

        if(cardproperty.includes('{Q}')) {
            manaString = manaString.replace('{Q}', '<img src="../../assets/untap.svg">');
        }

        if(cardproperty.includes('{U/P}')) {
            while(manaString2.includes('{U/P}')) {
                manaString = manaString.replace('{U/P}', '<img src="../../assets/blue-phyrexian-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{B/P}')) {
            while(manaString2.includes('{B/P}')) {
                manaString = manaString.replace('{B/P}', '<img src="../../assets/black-phyrexian-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{R/P}')) {
            while(manaString2.includes('{R/P}')) {
                manaString = manaString.replace('{R/P}', '<img src="../../assets/red-phyrexian-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{G/P}')) {
            while(manaString2.includes('{G/P}')) {
                manaString = manaString.replace('{G/P}', '<img src="../../assets/green-phyrexian-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{W/P}')) {
            while(manaString2.includes('{W/P}')) {
                manaString = manaString.replace('{W/P}', '<img src="../../assets/white-phyrexian-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{P}')) {
            while(manaString2.includes('{P}')) {
                manaString = manaString.replace('{P}', '<img src="../../assets/colorless-phyrexian-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{X}')) {
            while(manaString2.includes('{X}')) {
                manaString = manaString.replace('{X}', '<img src="../../assets/x-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{Y}')) {
            while(manaString2.includes('{Y}')) {
                manaString = manaString.replace('{Y}', '<img src="../../assets/y-mana.svg">');
                manaString2 = manaString;
            }
        }

        if(cardproperty.includes('{Z}')) {
            while(manaString2.includes('{Z}')) {
                manaString = manaString.replace('{Z}', '<img src="../../assets/z-mana.svg">');
                manaString2 = manaString;
            }
        }
        

        if(cardproperty.includes('{z}')) {
            while(manaString2.includes('{}')) {
                manaString = manaString.replace('{z}', '<img src="../../assets/z-mana.svg">');
                manaString2 = manaString;
            }
        }



        return manaString;  
    }
    else {
        return;
    }
}