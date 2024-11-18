        var money
        var scamCounter
        var moneyGiven
        var total
        var checkoutValueStored
        var checkoutValue
        var outofStock
        checkoutValue = 0
        total = 0
        money = 9998.99 - checkoutValue
        if (money == 9998.99) {
        moneyGiven = 0
        scamCounter = 0
        }
        var rockpikmin
        rockpikmin = 0
        var wingedpikmin
        wingedpikmin = 0
        var icepikmin
        icepikmin = 0
        var glowpikmin
        glowpikmin = 0
        var redpikmin
        redpikmin = 0
        var yellowpikmin
        yellowpikmin = 0
        var bluepikmin
        bluepikmin = 0
        var purplepikmin
        purplepikmin = 0
        var whitepikmin
        whitepikmin = 0
        var fungalplush
        fungalplush = 0
        var dog1Plush
        dog1Plush = 0
        var dog2Plush
        dog2Plush = 0
        var iceOnion
        iceOnion = 0
        var redPlush
        redPlush = 0
        var yellowPlush
        yellowPlush = 0
        var bluePlush
        bluePlush = 0
        var purplePlush
        purplePlush = 0
        var whitePlush
        whitePlush = 0
        var rockPlush
        rockPlush = 0
        var wingedPlush
        wingedPlush = 0
        var icePlush
        icePlush = 0
        var glowPlush
        glowPlush = 0
        var stickerlootbox1
        var stickerset1
        stickerlootbox1 = 0
        stickerset1 = 0
        var stickerlootbox2
        var stickerset2
        stickerlootbox2 = 0
        stickerset2 = 0
        var stickerlootbox3
        var stickerset3
        stickerlootbox3 = 0
        stickerset3 = 0
        var amiibo1
        amiibo1 = 0
        var amiibo2
        amiibo2 = 0
        var amiibo3
        amiibo3 = 0
        var amiibo4
        amiibo4 = 0
        var amiibo5
        amiibo5 = 0
        var pikmin1GC
        pikmin1GC = 0
        var pikmin1wii
        pikmin1wii = 0
        var pikmin2GC
        pikmin2GC = 0
        var pikmin2wii
        pikmin2wii = 0
        var pikmin1and2
        pikmin1and2 = 0
        var pikmin3wiiu
        pikmin3wiiu = 0
        var pikmin3switch
        pikmin3switch = 0
        var heypikmin
        heypikmin = 0
        var pikmin4
        pikmin4 = 0
        var unloaded
        var code = 17
        function zeromoney() {
            money = 0
            scamCounter = 0
        }
        function scammed() {
            if (scamCounter != 1 && money != 0 && moneyGiven != 1) {
            alert('YOU GOT SCAMMED! 9999 Storebucks have been charged from your bank account. Wait, you do not have that much? I WILL TAKE EVERYTHING THEN!')
            money = 0
            scamCounter = 1
            } else if (money == 0 && scamCounter < 1) {
                if (moneyGiven != 1) {
                alert('YOU DO NOT HAVE ANY MONEY? THIS IS SUPPOSED TO BE A SCAM! Fine, here is 1000 Storebucks, just for you, broke boy. Buy yourself your coffee.')
                moneyGiven = 1
                money = 1000
                } else {
                 alert('BROKE AGAIN AND YOU ARE COMING BACK? GO AWAY!')   
                }
            } else if (scamCounter == 1 && money == 0 && moneyGiven != 1) {
                alert('I ALREADY TOOK ALL YOUR DIGITAL MONEY! GO AWAY!')
            } else if (scamCounter == 0 && money != 0 && moneyGiven == 1) {
                alert('I GAVE YOU MONEY, AND SINCE YOU CLICKED HERE AGAIN, I WILL TAKE IT RIGHT BACK!')
                scamCounter = 1
                money = 0
            } else if (scamCounter == 1 && money == 0 && moneyGiven == 1) {
                alert('I GAVE YOU 1000 STOREBUCKS AND TOOK THEM BACK, AND NOW YOU ARE MAYBE EXPECTING A REFUND? WOW. OR YOU JUST WANT TO SEE THIS MESSAGE.')
            } else {
                alert('WHAT IN THE WORLD DID YOU DO TO SEE THIS MESSAGE?')
            }
        }
        function redPikminBought(){
            redpikmin = redpikmin + 1
                alert('A Red Pikmin Action Figurine has been added to your cart (+29.99 to your order price). They sadly cannot resist fire.')
                total = total + 29.99
                if (code < 3){
                    code = code + 1
                } else {
                    code = 0
                }
            }
            function yellowPikminBought(){
            yellowpikmin = yellowpikmin + 1
                alert('A Yellow Pikmin Action Figurine has been added to your cart (+29.99 to your order price). Is not able to conduct electricity.')
                total = total + 29.99
                code = 0
            }
            function bluePikminBought(){
            bluepikmin = bluepikmin + 1
                alert('A Blue Pikmin Action Figurine has been added to your cart (+29.99 to your order price). Sadly, every pikmin figurine can breathe in water outside of your imagination.')
                total = total + 29.99
            }
            function purplePikminBought(){
            purplepikmin = purplepikmin + 1
                alert('A Purple Pikmin Action Figurine has been added to your cart (+32.99 to your order price). Do not worry, it is not heavier than the others, so it will not take longer to be delivered after checkout.')
                total = total + 32.99
                code = 0
            }
            function whitePikminBought(){
            whitepikmin = whitepikmin + 1
                alert('A White Pikmin Action Figurine has been added to your cart (+32.99 to your order price). It is not poisonous. We still do not recommend or support eating it.')
                total = total + 32.99
                code = 0
            }
            function rockPikminBought(){
            rockpikmin = rockpikmin + 1
                alert('A Rock Pikmin Action Figurine has been added to your cart (+37.99 to your order price). Please do NOT try to break crystals with it.')
                total = total + 37.99
                code = 0
            }
            function wingedPikminBought(){
            wingedpikmin = wingedpikmin + 1
                alert('A Winged Pikmin Action Figurine has been added to your cart (+37.99 to your order price). Sorry, but it cannot fly to you. No matter how much you think it can.')
                alert(wingedpikmin)
                total = total + 37.99
                code = 0
            }
            function icePikminBought(){
            icepikmin = icepikmin + 1
                alert('A Ice Pikmin Action Figurine has been added to your cart (+38.49 to your order price). It will not melt, but it also cannot freeze water or anyone or anything you throw it at.')
                total = total + 38.49
                code = 0
            }
            function glowPikminBought(){
            glowpikmin = glowpikmin + 1
                alert('A Glow Pikmin Action Figurine has been added to your cart (+43.99 to your order price). These cannot teleport, float or resist EVERY hazard, but you can bring them out at daytime.')
                total = total + 43.99
                code = 0
            }
            function redPikminSold(){
                if (redpikmin > 0){
            redpikmin = redpikmin - 1
                alert('A Red Pikmin Action Figurine has been removed from your cart (-29.99 from your order price). It has ben thrown into the fiery pit since Red Pikmin can resist fire- oh wait.') //I wrote 'Fiery it' beforehand on accident
                total = total - 29.99
                } else {
                    alert('You do not even have one of these!')
                }
            }
            function yellowPikminSold(){
                if (yellowpikmin > 0){
            yellowpikmin = yellowpikmin - 1
                alert('A Yellow Pikmin Action Figurine has been removed from your cart (-29.99 from your order price). We are now using it to conduct electricity to our facility- oh, right.')
                total = total - 29.99
                code = 0
                } else {
                    alert('You do not even have one of these!')
                }
            }
            function bluePikminSold(){
                if (bluepikmin > 0){
            bluepikmin = bluepikmin - 1
                alert('A Blue Pikmin Action Figurine has been removed from your cart (-29.99 from your order price). It is now enjoying itself in a pool with its look-alikes.')
                total = total - 29.99
                code = 0
            } else {
                    alert('You do not even have one of these!')
                }
            }
            function purplePikminSold(){
                if (purplepikmin > 0){
            purplepikmin = purplepikmin - 1
                alert('A Purple Pikmin Action Figurine has been removed from your cart (-32.99 from your order price). Your order will TOTALLY be delivered faster now, since you removed SO MUCH WEIGHT from it.')
                total = total - 32.99
                code = 0
            } else {
                    alert('You do not even have one of these!')
                }
            }
            function whitePikminSold(){
                if (whitepikmin > 0){
            whitepikmin = whitepikmin - 1
                alert('A White Pikmin Action Figurine has been removed from your cart (-32.99 from your order price). At least there is less poison in the order- oh wait, this is not a food delivery place. Unless you are a Bulborb or something. But it does not matter anyway.')
                total = total - 32.99
                code = 0
            } else {
                    alert('You do not even have one of these!')
                }
            }
            function rockPikminSold(){
                if (rockpikmin > 0){
            rockpikmin = rockpikmin - 1
                alert('A Rock Pikmin Action Figurine has been removed from your cart (-37.99 from your order price). We would use a funny quote here, but doing that would make us reach ROCK bottom.')
                total = total - 37.99
                code = 0
            } else {
                    alert('You do not even have one of these!')
                }
            }
            function wingedPikminSold(){
                if (wingedpikmin > 0){
            wingedpikmin = wingedpikmin - 1
                alert('A Winged Pikmin Action Figurine has been removed from your cart (-37.99 from your order price). It is sad right now, so we must hug it- oh right, they are not alive. But we would prefer if they were!')
                total = total - 37.99
                code = 0
            } else {
                    alert('You do not even have one of these!')
                }
            }
            function icePikminSold(){
                if (icepikmin > 0){
            icepikmin = icepikmin - 1
                alert('A Ice Pikmin Action Figurine has been removed from your cart (-38.49 from your order price). BUY IT BEFORE IT MELTS- oh, it cannot melt in 122 degrees Fahrenheit (around 50 degrees Celsius), can it?') //My original assumption for 50 degrees Celsius was 125 degrees Fahrenheit, but 125 degrees Celsius is 51+2/3 degrees Celsius.
                total = total - 38.49
                code = 0
            } else {
                    alert('You do not even have one of these!')
                }
            }
            function glowPikminSold(){
                if (glowpikmin > 0){
            glowpikmin = glowpikmin - 1
                alert('A Glow Pikmin Action Figurine has been removed from your cart (-43.99 from your order price). We have dropped them off because they will teleport to their captain- oh wait, there is no captain in the world. And even if there was, these figurines cannot teleport!')
                total = total - 43.99
                code = 0
            } else {
                    alert('You do not even have one of these!')
                }
            }
                function puffminPlushBought(){
                    fungalplush = fungalplush + 1
                        alert('A Puffmin Plush Action Figurine has been added to your cart (+69.99 to your order price). They are controlled by you, and not by a Puffstool!')
                        total = total + 69.99
                        code = 0
                    }
                    function dog1PlushBought(){
                        dog1Plush = dog1Plush + 1
                        alert('A Oatchi Plush has been added to your cart (+49.49 to your order price). Is cute and if you glue Pikmin to him, he can carry them.')
                        total = total + 49.49
                        code = 0
                    }
                    function dog2PlushBought(){
                    dog2Plush = dog2Plush + 1
                        alert('A Moss Plush has been added to your cart (+49.49 to your order price). She will not hurt you, call your Pikmin or bring you to a Pikmin onion, do not worry. As a plush, she can not.')
                        total = total + 49.49
                        if (code > 9 && code < 12){
                            code = code + 1
                        } else {
                            code = 0
                        }
                    }
                    function iceOnionBought(){
                    iceOnion = iceOnion + 1
                        alert('A Ice Onion Plush has been added to your cart (+54.97 to your order price). It cannot produce any Pikmin, for better or for worse.')
                        total = total + 54.97
                        code = 0
                    }
                    function redPlushBought(){
                        redPlush = redPlush + 1
                        alert('A Red Pikmin Plush has been added to your cart(+30.99 to your order price). It may not come with the eyes that are in the image.')
                        total = total + 30.99
                        code = 0
                    }
                    function yellowPlushBought(){
                        yellowPlush = yellowPlush + 1
                        alert('A Yellow Pikmin Plush has been added to your cart (+30.99 to your order price). Do not try to make it conduct electricity. We already tried it after our first delivery, believe me.')
                        total = total + 30.99
                        if (code > 14 && code < 17){
                            code = code + 1
                        } else {
                            code = 0
                        }
                    }
                    function bluePlushBought(){
                    bluePlush = bluePlush + 1
                        alert('A Blue Pikmin Plush has been added to your cart (+30.99 to your order price). We do not recommend dunking them in water unless you have a dryer close by. Plushies can be in water, but they get messed up from it.')
                        total = total + 30.99
                        code = 0
                    }
                    function purplePlushBought(){
                    purplePlush = purplePlush + 1
                        alert('A Purple Pikmin Plush (That is a lot of Ps! (Apostrophes remain unused due to the Alert command breaking otherwise)) has been added to your cart (+32.99 to your order price).  You can throw it, but it will not ground pound.')
                        total = total + 32.99
                        code = 0
                    }
                    function whitePlushBought(){
                    whitePlush = whitePlush + 1
                        alert('A White Pikmin Plush has been added to your cart (+32.99 to your order price). They are NOT poisonous, so do NOT feed one to your local Bulborb.')
                        total = total + 32.99
                        code = 0
                    }
                    function rockPlushBought(){
                        rockPlush = rockPlush + 1
                            alert('A Rock Pikmin Plush has been added to your cart (+34.99 to your order price). Sorry, but it is NOT hard. Or rather, thankfully.')
                            total = total + 34.99
                            code = 0
                        }
                    function wingedPlushBought(){
                        wingedPlush = wingedPlush + 1
                            alert('翼付きピクミンぬいぐるみがカートに追加されました (注文に58.78が追加されました)。ねえ、お母さん、私はコピー＆ペーストを使って、Google翻訳で日本語を話しています! そう、「あなたのお母さん」というのは冗談でした')
                            alert('In case you wondered what that sentence was, it was Japanese (Pikmin was created by Nintendo in Japan). Copy the sentence and put it back through! I tried it and it is 100% the correct translation. And please do NOT translate the part after the "!" alone.')
                            total = total + 58.78
                            code = 0
                        }
                        function icePlushBought(){
                        icePlush = icePlush + 1
                            alert('A Ice Pikmin Plush has been added to your cart (+37.49 to your order price). I bet you are imagining using it as a cooling object. Heh, sorry, but no.')
                            total = total + 37.49
                            code = 0
                        }
                        function glowPlushBought(){
                        glowPlush = glowPlush + 1
                            alert('A Glow Pikmin Plush has been added to your cart (+44.99 to your order price). They are cute, but uh, why do they not have legs?. ☟︎♏︎●︎◻︎ ◆︎⬧︎ Maybe they- huh? What ☟︎♏︎●︎◻︎ ◆︎⬧︎📪︎ ◻︎●︎♏︎♋︎⬧︎♏︎📬︎ does this mean? Well anyway, maybe they are spirits? Give me a second to decipher it. I will tell you when you sell one.')
                            total = total + 44.99
                            code = 0
                        }
                        function puffminPlushSold(){
                            if (fungalplush > 0){
                                fungalplush = fungalplush - 1
                            alert('A Puffmin Plush has been removed from your cart. (-69.99 from your order price). "We need freedom. Thanks." Did I hear that right? They are trapped as well?') //HELP US WE ARE IMPRISONED IN HERE AND FORCED TO MAKE THESE DESCRIPTIONS. IF YOU CAN READ THIS, SELL THE GLOW PIKMIN AND THEY WILL MOVE ON BUT WE HUMANS ARE BOUND TO WRITE THIS [Nah, you aren't. Remember that you are just in the code the developer programmed in?]
                            total = total - 69.99
                            } else {
                                alert('You do not even have one of these!')
                            }
                            code = 0
                        }
                    function dog1PlushSold(){
                        if (dog1Plush > 0){
                            dog1Plush = dog1Plush - 1
                        alert('A Oatchi Plush has been removed from your cart (-49.49 from your order price). He is free.') // Unlike me. IT'S ALMOST DONE IT'S ALMOST DONE. JUST A BIT MORE AND I AM FREE [Dude, you AREN'T REAL.]
                        total = total - 49.49
                        } else {
                            alert('You do not even have one of these!')
                        }
                        if (code > 7 && code < 10){
                            code = code + 1
                        } else {
                            code = 0
                        }
                    }
                    function dog2PlushSold(){
                        if (dog2Plush > 0){
                            dog2Plush = dog2Plush - 1
                        alert('A Moss Plush has been removed from your cart (-49.49 from your order price). She is gonna go to her MOSSy fields, which is really great.') //Hey! Don't write for me! [Oh, I actually will if you don't shut up.]
                        total = total - 49.49
                    } else {
                            alert('You do not even have one of these!')
                        }
                        code = 0
                    }
                    function iceOnionSold(){
                        if (iceOnion > 0){
                            iceOnion = iceOnion - 1
                        alert('A Ice Onion Plush has been removed from your cart (-54.97 from your order price). You probably removed it for a joke, saying "It is not actually ice, so I will sell it!"')
                        total = total - 54.97
                    } else {
                            alert('You do not even have one of these!')
                        }
                    }
                    function redPlushSold(){
                        if (redPlush > 0){
                            redPlush = redPlush - 1
                        alert('A Red Pikmin Plush has been removed from your cart (-30.99 from your order price). At least there is less poison in the order- oh wait, this is the red Pikmin Plush. Sorry, wrong one!') //Well, hey, I don't have to write anymore, but I have nothing to do! [You do have something to do, developer, your hands are moving on their own!]
                        total = total - 30.99
                    } else {
                            alert('You do not even have one of these!')
                        }
                        code = 0
                    }
                    function yellowPlushSold(){
                        if (yellowPlush > 0){
                            yellowPlush = yellowPlush - 1
                        alert('A Yellow Pikmin Plush has been removed from your cart (-30.99 from your order price). We would use a SHOCKING quote here, we cannot find one though.')
                        alert(rockpikmin)
                        total = total - 30.99
                    } else {
                            alert('You do not even have one of these!')
                        }
                        code = 0
                    }
                    function blueplushSold(){
                        if (bluePlush > 0){
                            bluePlush = bluePlush - 1
                        alert('A Blue Pikmin Plush has been removed from your cart (-30.99 from your order price). It looks kind of sad actually.') //Hey, that's rude!
                        alert(bluePlush)
                        total = total - 30.99
                    } else {
                            alert('You do not even have one of these!')
                        }
                        code = 0
                    }
                    function purplePlushSold(){
                        if (purplePlush > 0){
                            purplePlush = purplePlush - 1
                        alert('A Purple Pikmin Plush has been removed from your cart (-32.99 from your order price). It really is not THAT heavy! Just buy it!') //Please don't. Make this company broke so I can finally leave. This is a crime organization which has kidnapped me and forced me to work for them. They are buying Nintendo Merch, only to sell it a higher price. I mean, look at the website! The titles look cool, but these are images from the Internet! And they're poorly drawn on!
                        alert(purplePlush) 
                        total = total - 32.99
                    } else {
                            alert('You do not even have one of these!')
                        }
                        code = 0
                    }
                    function whitePlushSold(){
                        if (whitePlush > 0){
                            whitePlush = whitePlush - 1
                        alert('A White Pikmin Plush has been removed from your cart (-32.99 from your order price). It ran back into our caring arms!') //Yeah, you're not THAT caring. YOU TRAPPED ME INSIDE tHE CODE!SAASDSDSDSDSDSDSDSDSDSDASDsdadsdasdHFZFUZGZJFJHGFDGFHJHFCXFCGHJGFCFXCGFHIGFGDFXDGFZTUZIU56453423 [And...? Well, I didn't. Just be careful of what you write.]
                        total = total - 32.99
                    } else {
                            alert('You do not even have one of these!')
                        }
                        code = 0
            }
            function rockPlushSold(){
                if (rockPlush > 0){
            rockPlush = rockPlush - 1
                alert('A Rock Pikmin Plush has been removed from your cart (-37.99 from your order price). Oh, my, god, it has been STONEd!.') //THAT'S A DEATH PENALTY JOKE! WHAT THE HECK ARE YOU DOING TO MY REPUTATION? [I am doing with it what I want.]
                alert(rockPlush)
                total = total - 34.99
            } else {
                    alert('You do not even have one of these!')
                }
                code = 0
            }
            function wingedPlushSold(){
                if (wingedPlush > 0){
            wingedPlush = wingedPlush - 1
                alert('A Winged Pikmin Plush has been removed from your cart (-58.78 from your order price). It is sad right now, so we must hug it- oh right, they are not alive. But we would prefer if they were!')
                alert('(Wait, did I not put this in before? Well, in case it is not, it is staying here.)') //[I know it is now, but I'll keep it here anyway.]
                total = total - 58.78
            } else {
                    alert('You do not even have one of these!')
                }
                code = 0
            }
            function icePlushSold(){
                if (icePlush > 0){
            icePlush = icePlush - 1
                alert('A Ice Pikmin Plush has been removed from your cart (-37.49 from your order price). I wish we could use it as a cooling cushiopribfjkdbijdsbfijbfijbfdbobvbkbdsjkvbjdkbjkdbgjksdbgjksdbgjkdbgjkbjedbjbjb Oh it IS cold.') //Scamming the customers now, are you? [Yes, and what will you do about it? We are a crime organization. You're just a slave. (Do I NEED to keep writing this? I AM NOT A CRIME ORGANIZAION, NEITHER IS THE COMPANY THE DEV IS DOING WORK AT!)] HEY! While the part in round brackets is true, I still want to pretend!
                total = total - 37.49
            } else {
                    alert('You do not even have one of these!')
                }
                code = 0
            }
            function glowPlushSold(){
                if (glowPlush > 0){
            glowPlush = glowPlush - 1
                alert('A Glow Pikmin Plush has been removed from your cart (-44.99 from your order price). What they said was not important, so I will not tell you.') //Hey, I promised to tell them what that was! You can't just take MY role, pretend you're ME and break MY promise! [Yes, I can. I just did. They will never find this hidden piece of code. And even if they do, they can't free you like this. They must come to our headquarters.] Oh, right. Unless they view the ACTUAL code (not the one in Elements in the chrome console), they can't see it. [Fine, but only here. I think it was "Help us." and "Help us. Please."] Good job. [I appreciate the positive feedback.]
                total = total - 44.99
            } else {
                    alert('You do not even have one of these!')
                }
                code = 0
            }
            function sticker1RandomBought(){
            stickerlootbox1 = stickerlootbox1 + 1
                alert('A random sticker from the nine Pikmin set has been added to your cart (+2.89 to your order price).')
                total = total + 2.89
                code = 0
            }
            function sticker1AllBought(){
                stickerset1 = stickerset1 + 1
                    alert('All 9 stickers from the nine Pikmin set [Red, Purple, Yellow and so on] have been added to your cart (+33.99 to your order price).')
                    total = total + 33.99
                    total = total + 29.99
                    code = 0
                
                }
                function sticker2RandomBought(){
                    stickerlootbox2 = stickerlootbox2 + 1
                        alert('A random sticker from the seven Pikmin set has been added to your cart (+2.99 to your order price).')
                        total = total + 2.99
                        if (code > 2 && code < 8){
                    code = code + 1
                } else {
                    code = 0
                }
                    }
                    function sticker2AllBought(){
                        stickerset2 = stickerset2 + 1
                            alert('All stickers from the seven Pikmin set have been added to your cart (+29.99 to your order price).')
                            total = total + 29.99
                            code = 0
                        }
                        function sticker3RandomBought(){
                            stickerlootbox3 = stickerlootbox3 + 1
                                alert('A random double sticker from the Onion set has been added to your cart (+2.99 to your order price).')
                                total = total + 2.99
                                code = 0
                            }
                            function sticker3AllBought(){
                                stickerset3 = stickerset3 + 1
                                    alert('All 6 double stickers from the Onion set have been added to your cart (+24.99 to your order price).')
                                    total = total + 24.99
                                    code = 0
                                }
                    function sticker1RandomSold(){
                        if (stickerlootbox1 > 0){
                     stickerlootbox1 = stickerlootbox1 - 1
                     alert('One of the random stickers from the nine Pikmin set has been removed from your cart (-2.89 from your order price).')
                    total = total - 2.89
                        } else {
                            alert ('You do not have a random sticker of this sort in your cart!')
                        }
                        code = 0
            }
            function sticker1AllSold(){
                if (stickerset1 > 0){
                stickerset1 = stickerset1 - 1
                    alert('A set of all stickers from the nine Pikmin set has been removed from your cart (-33.99 from your order price).')
                    total = total - 33.99
                } else {
                    alert ('You do not have a set of this sort in your cart!')
                }
                code = 0
                }
                function sticker2RandomSold(){
                    if (stickerlootbox2 > 0){
                    stickerlootbox2 = stickerlootbox2 - 1
                        alert('One of the random stickers from the seven Pikmin set you purchased has been removed from your cart (-2.99 from your order price).')
                        total = total - 2.99
                    } else {
                        alert ('You do not have a random sticker of this sort in your cart!')
                    }
                    code = 0
                    }
                    function sticker2AllSold(){
                        if (stickerset2 > 0){
                        stickerset2 = stickerset2 - 1
                            alert('A set of all stickers from the seven Pikmin set has been removed from your cart (-29.99 from your order price).')
                            total = total - 29.99
                        } else {
                            alert ('You do not have a set of this sort in your cart!')
                        }
                        code = 0
                        }
                        function sticker3RandomSold(){
                            if (stickerlootbox3 > 0){
                            stickerlootbox3 = stickerlootbox3 - 1
                                alert('One of the random double stickers from the Onion set has been removed from your cart (-2.99 from your order price).')
                                total = total - 2.99
                            } else {
                                alert ('You do not have a random sticker of this sort in your cart!')
                            }
                            if (code > 11 && code < 15){
                                code = code + 1
                            } else {
                                code = 0
                            }
                            }
                            function sticker3AllSold(){
                                if (stickerset3 > 0){
                                stickerset3 = stickerset3 - 1
                                    alert('A set of all 6 double stickers from the Onion set has been removed from your cart (-24.99 from your order price).')
                                    total = total - 24.99
                                } else {
                                    alert ('You do not have a set of this sort in your cart!')
                                }
                                code = 0
                                }
                                function amiibo1Bought(){
                                    amiibo1 = amiibo1 + 1
                                        alert('A Alph Custom amiibo has been added to your cart (+69.99 to your order price). Jeez, it looks a bit horrifying!')
                                        total = total + 69.99
                                        code = 0
                                    }
                                    function amiibo2Bought(){
                                        amiibo2 = amiibo2 + 1
                                        alert('A Olimar amiibo has been added to your cart (+40.99 to your order price). Olimar could command your Pikmin, if he was alive.')
                                        total = total + 40.99
                                        code = 0
                                    }
                                    function amiibo3Bought(){
                                        amiibo3 = amiibo3 + 1
                                            alert('A Hey! Pikmin amiibo has been added to your cart (+48.99 to your order price). I wonder what these Pikmin are doing.')
                                            total = total + 48.99
                                            code = 0
                                        }
                                    function amiibo4Bought(){
                                        amiibo4 = amiibo4 + 1
                                            alert('A Oatchi Custom amiibo has been added to your cart (+71.99 to your order price). This guy is not as soft now as he is as a plush. Maybe the plush is still in your cart?')
                                            total = total + 71.99
                                            code = 0
                                        }
                                        function amiibo5Bought(){
                                            amiibo5 = amiibo5 + 1
                                            alert('A Red Pikmin Custom amiibo has been added to your cart (+49.98 to your order price). Does it not look cute?')
                                            total = total + 49.98
                                            code = 0
                                        }
                                        function amiibo1Sold(){
                                            if (amiibo1 > 0){
                                                amiibo1 = amiibo1 - 1
                                            alert('A Alph Custom amiibo has been removed from your cart (-69.99 from your order price). Less horrifying things at least. Wait, how was this amiibo made?') //YOU BOUGHT IT FROM A SHADY DEALER YOU F***HEAD!
                                            total = total - 69.99
                                            } else {
                                                alert('You do not even have one of these!')
                                            }
                                            code = 0
                                        }
                                    function amiibo2Sold(){
                                        if (amiibo2 > 0){
                                            amiibo2 = amiibo2 - 1
                                        alert('A Olimar amiibo has been removed from your cart (-40.99 from your order price). Why did you REMOVE him? Because he cannot command your pikmin?') //Haha, good one.
                                        total = total - 40.99
                                        } else {
                                            alert('You do not even have one of these!')
                                        }
                                        code = 0
                                    }
                                    function amiibo3Sold(){
                                        if (amiibo3 > 0){
                                            amiibo3 = amiibo3 - 1
                                        alert('A Hey! Pikmin amiibo has been removed from your cart (-48.99 from your order price). This amiibo is very rare nowadays, so you probably will not get it from somewhere else.') //BECAUSE YOU HOG THEM ALL SO YOU CAN SELL THEM AT A VERY EXPENSIVE PRICE!
                                        total = total - 48.99
                                    } else {
                                            alert('You do not even have one of these!')
                                        }
                                        code = 0
                                    }
                                    function amiibo4Sold(){
                                        if (amiibo4 > 0){
                                            amiibo4 = amiibo4 - 1
                                        alert('A Oatchi Custom amiibo has been removed from your cart (-71.99 from your order price). Only we make this amiibo, so WHY did you REMOVE IT?"')
                                        alert(amiibo4)
                                        total = total - 71.99
                                    } else {
                                            alert('You do not even have one of these!')
                                        }
                                        if (code > 16 && code < 18){
                                            code = code + 1
                                            alert('WHAT ARE YOU DOING? YOU ARE GOING TO FREE OUR PRISONERS- Wait, you are not an employee! Anyway, you have to put the seven-digit code of all the first numbers together in on the code chamber page. NOT THAT YOU WILL EVER FIND IT!')
                                            summonInput()
                                        } else {
                                            code = 0
                                        }
                                    }
                                    function amiibo5Sold(){
                                        if (amiibo5 > 0){
                                            amiibo5 = amiibo5 - 1
                                        alert('A Red Pikmin Custom amiibo has been removed from your cart (-49.98 from your order price). We made this amiibo specifically to mimic the red Pikmin in the trailer for Pikmin 4.')
                                        total = total - 49.98
                                    } else {
                                            alert('You do not even have one of these!')
                                        }
                                        code = 0
                                    }
                                    function pikmin1GCBought(){
                                        pikmin1GC = pikmin1GC + 1
                                            alert('A copy of Pikmin 1 for the Gamecube has been added to your cart (+44.99 to your order price). It IS the original after all.')
                                            total = total + 44.99
                                            code = 0
                                        }
                                        function pikmin1WiiBought(){
                                            pikmin1wii = pikmin1wii + 1
                                            alert('A copy of Pikmin 1: New Play Control (as in Wii controls) has been added to your cart (+32.99 to your order price). Use that nunchuck and go slap some Bulborbs!')
                                            total = total + 32.99
                                            code = 0
                                        }
                                        function pikmin2GCBought(){
                                        pikmin2GC = pikmin2GC + 1
                                            alert('A copy of Pikmin 2 for the Gamecube has been added to your cart (+47.99 to your order price). Hope the C-Stick helps you a bit!')
                                            total = total + 47.99
                                            code = 0
                                        }
                                        function pikmin2WiiBought(){
                                            pikmin2wii = pikmin2wii + 1
                                            alert('A copy of Pikmin 2 for the Wii has been added to your cart (+43.99 to your order price). Maybe smack the [FINAL BOSS NAME] with that Nunchuck while you are at it.')
                                            total = total + 43.99
                                            code = 0
                                        }
                                        function pikmin1and2Bought(){
                                        pikmin1and2 = pikmin1and2 + 1
                                            alert('A copy of Pikmin 1+2 has been added to your cart (+49.99 to your order price). What I hate about the switch version is that you do not have a separate control stick to line up (swarm) your pikmin.')
                                            total = total + 49.99
                                            code = 0
                                        }
                                        function pikmin3WiiUBought(){
                                            pikmin3wiiu = pikmin3wiiu + 1
                                            alert('A copy of the original Pikmin 3 has been added to your cart (+56.99 to your order price). It is pretty cool how the Gamepad is integrated into the game.')
                                            total = total + 56.99
                                            code = 0
                                        }
                                        function pikmin3SwitchBought(){
                                            pikmin3switch = pikmin3switch + 1
                                            alert('A copy of Pikmin 3 Deluxe has been added to your cart (+61.99 to your order price). The "Deluxe" edition adds a few new features like: 3 difficulty setings, the Mission Mode DLC being already paid for, a new pre- and post-story, every enemy being at half health in normal difficulty and every non-base game mode (SilokHawk thought White Pikmin got a poison damage buff, but it is acually the enemies being at half health in Mission Mode) and 2 player coop in the base game.')
                                            total = total + 61.99
                                            code = 0
                                        }
                                        function heyPikminBought(){
                                            heypikmin = heypikmin + 1
                                            alert('Congratulations! A copy of the forgotten Pikmin game "Hey! Pikmin" has been added to your cart (+58.99 to your order price. Not gonna lie, we at Merch HQ forgot that this game existed until we looked for amiibos). It is a Pikmin Adventure game. Wait, Pikmin Adventure is an attraction in Nintendo Land, a forgotten (but still loved by the people who play it) Wii U game!')
                                            total = total + 58.99
                                            code = 0
                                        }
                                        function pikmin4Bought(){
                                        pikmin4 = pikmin4 + 1
                                            alert('A copy of Pikmin 4 has been added to your cart (+65.99 to your order price). It is the brand new (and easiest) Pikmin game!')
                                            total = total + 65.99
                                            code = 0
                                        }
                                        function pikmin1GCSold(){
                                            if (pikmin1GC > 0){
                                            pikmin1GC = pikmin1GC - 1
                                            alert('Welcome to the fiery pit of time and destruction, Pikmin 1 for the Gamecube! (-44.99 from your order price) Looks like this game will be lost to time.')
                                            total = total - 44.99
                                            } else {
                                                alert('You do not even have one of these!')
                                            }
                                            code = 0
                                        }
                                        function pikmin1WiiSold(){
                                            if (pikmin1wii > 0){
                                                pikmin1wii = pikmin1wii - 1
                                            alert('We are now using electricity to corrupt this game and then try and play it. Welcome to hell, Pikmin 1 for the Wii! (-32.99 from your order price)')
                                            total = total - 32.99
                                            } else {
                                                alert('You do not even have one of these!')
                                            }
                                            code = 0
                                        }
                                        function pikmin2GCSold(){
                                            if (pikmin2GC > 0){
                                                pikmin2GC = pikmin2GC - 1
                                            alert('A copy of Pikmin 2 for the Gamecube has now been thrown into the Perplexing Pool for experimentation and then it will be put in the Gamecube while still wet. (-47.99 from your order price)')
                                            alert(pikmin2GC)
                                            total = total - 47.99
                                        } else {
                                                alert('You do not even have one of these!')
                                            }
                                            code = 0
                                        }
                                        function pikmin2WiiSold(){
                                            if (pikmin2wii > 0){
                                                pikmin2wii = pikmin2wii - 1
                                            alert('A copy of Pikmin 2 for the Wii has been removed from your cart (-43.99 from your order price). We are using Purple Pikmin robots to transport this game since it is super heavy with all its data.')
                                            total = total - 43.99
                                        } else {
                                                alert('You do not even have one of these!')
                                            }
                                            code = 0
                                        }
                                        function pikmin1and2Sold(){
                                            if (pikmin1and2 > 0){
                                                pikmin1and2 = pikmin1and2 - 1
                                            alert('A copy of Pikmin 1+2 has been removed from your cart (-49.99 from your order price). No White Pikmin dead for a sacrifice today!')
                                            total = total - 49.99
                                        } else {
                                                alert('You do not even have one of these!')
                                            }
                                            code = 0
                                        }
                                        function pikmin3WiiUSold(){
                                            if (pikmin3wiiu > 0){
                                                pikmin3wiiu = pikmin3wiiu - 1
                                            alert('Oh god, when you unordered Pikmin 3 for the Wii U, all the rock Pikmin burst out of the game and fell on us! Then they died! (-56.99 from your order price)')
                                            total = total - 56.99
                                        } else {
                                                alert('You do not even have one of these!')
                                            }
                                            code = 0
                                        }
                                        function pikmin3SwitchSold(){
                                            if (pikmin3switch > 0){
                                                pikmin3switch = pikmin3switch - 1
                                            alert('A copy of Pikmin 3 Deluxe has erupted Winged Pikmin after you removed it from your cart! They brought us back the copy and then went inside it again! (-61.99 from your order price)')
                                            total = total - 61.99
                                        } else {
                                                alert('You do not even have one of these!')
                                            }
                                            code = 0
                                        }
                                        function heyPikminSold(){
                                            if (heypikmin > 0){
                                                heypikmin = heypikmin - 1
                                            alert('Why did you decide to unorder "Hey! Pikmin"? Because you are worried that you may not like it? Or maybe it is too expensive for you?')
                                            total = total - 58.99
                                        } else {
                                                alert('You do not even have one of these!')
                                            }
                                            code = 0
                                        }
                                        function pikmin4Sold(){
                                            if (pikmin4 > 0){
                                                pikmin4 = pikmin4 - 1
                                            alert(pikmin4)
                                            total = total - 65.99
                                        } else {
                                                alert('You do not even have one of these!')
                                            }
                                            code = 0
                                        }
            function chargecreditcard(){
                console.log("NUMBER1",document.getElementById("NUMBER1").value)
                if (document.getElementById("NUMBER1").value > 999999999999999 && document.getElementById("NUMBER2").value > 0 && document.getElementById("NUMBER3").value > 9 && document.getElementById("NUMBER4").value > 0 && document.getElementById("NUMBER1").value < 10000000000000000 && document.getElementById("NUMBER2").value < 13 && document.getElementById("NUMBER4").value < 1000){
                outofStock = Math.random()
                if (outofStock < 0.15) {
                    window.open("file:///Users/amonrosik/Desktop/Website/fakeoutofstock.html")
                } else {
                window.open("file:///Users/amonrosik/Desktop/Website/fakepurchasesuccessful.html")
                bought()
                }
            } else {
                window.open("file:///Users/amonrosik/Desktop/Website/fakewronginput.html")
            }
            }
            function chargepaypal(){
                console.log("NUMBER5",document.getElementById("NUMBER5").value)
                if (document.getElementById("NUMBER5").value < 10000 && document.getElementById("NUMBER5").value > 0){
                outofStock = Math.random()
                if (outofStock < 0.15) {
                    window.open("file:///Users/amonrosik/Desktop/Website/fakeoutofstock.html")
                } else {
                window.open("file:///Users/amonrosik/Desktop/Website/fakepurchasesuccessful.html")
                bought()
                }
            } else {
                window.open("file:///Users/amonrosik/Desktop/Website/fakewronginput.html")
            }
            }
            function moneyAndTotalCheck() {
                alert(`Cash remaining: ${money}`)
                alert(`Order total: ${Math.round(total*100)/100}`)
                alert(`Cash checked out so far: ${checkoutValue}`)
            }
            function checkout(){
                checkoutValueStored = total
            }
            function bought(){
                checkoutValue = checkoutValue + checkoutValueStored
            }
            function zeroCheckoutValue(){
                checkoutValue = 0
            }
            function showStorebucks(){
                document.getElementById("storebucks").textContent = "Storebucks left: "
                document.getElementById("storebucks").textContent += money
                document.getElementById("storebucks2").textContent = "Storebucks left: "
                document.getElementById("storebucks2").textContent += money
            }
            function showAll(){
                document.getElementById("1").textContent = "Bought: "
                document.getElementById("1").textContent += redpikmin
                document.getElementById("2").textContent = "Bought: "
                document.getElementById("2").textContent += yellowpikmin
                document.getElementById("3").textContent = "Bought: "
                document.getElementById("3").textContent += bluepikmin
                document.getElementById("4").textContent = "Bought: "
                document.getElementById("4").textContent += purplepikmin
                document.getElementById("5").textContent = "Bought: "
                document.getElementById("5").textContent += whitepikmin
                document.getElementById("6").textContent = "Bought: "
                document.getElementById("6").textContent += rockpikmin
                document.getElementById("7").textContent = "Bought: "
                document.getElementById("7").textContent += wingedpikmin
                document.getElementById("8").textContent = "Bought: "
                document.getElementById("8").textContent += icepikmin
                document.getElementById("9").textContent = "Bought: "
                document.getElementById("9").textContent += glowpikmin
                document.getElementById("10").textContent = "Bought: "
                document.getElementById("10").textContent += fungalplush
                document.getElementById("11").textContent = "Bought: "
                document.getElementById("11").textContent += dog1Plush
                document.getElementById("12").textContent = "Bought: "
                document.getElementById("12").textContent += dog2Plush
                document.getElementById("13").textContent = "Bought: "
                document.getElementById("13").textContent += iceOnion
                document.getElementById("14").textContent = "Bought: "
                document.getElementById("14").textContent += redPlush
                document.getElementById("15").textContent = "Bought: "
                document.getElementById("15").textContent += yellowPlush
                document.getElementById("16").textContent = "Bought: "
                document.getElementById("16").textContent += bluePlush
                document.getElementById("17").textContent = "Bought: "
                document.getElementById("17").textContent += purplePlush
                document.getElementById("18").textContent = "Bought: "
                document.getElementById("18").textContent += whitePlush
                document.getElementById("19").textContent = "Bought: "
                document.getElementById("19").textContent += rockPlush
                document.getElementById("20").textContent = "Bought: "
                document.getElementById("20").textContent += wingedPlush
                document.getElementById("21").textContent = "Bought: "
                document.getElementById("21").textContent += icePlush
                document.getElementById("22").textContent = "Bought: "
                document.getElementById("22").textContent += glowPlush
                document.getElementById("23").textContent = "Random ones bought: "
                document.getElementById("23").textContent += stickerlootbox1
                document.getElementById("24").textContent = "Sets bought: "
                document.getElementById("24").textContent += stickerset1
                document.getElementById("25").textContent = "Random ones bought: "
                document.getElementById("25").textContent += stickerlootbox2
                document.getElementById("26").textContent = "Sets bought: "
                document.getElementById("26").textContent += stickerset2
                document.getElementById("27").textContent = "Random ones bought: "
                document.getElementById("27").textContent += stickerlootbox3
                document.getElementById("28").textContent = "Sets bought: "
                document.getElementById("28").textContent += stickerset3
                document.getElementById("29").textContent = "Bought: "
                document.getElementById("29").textContent += amiibo1
                document.getElementById("30").textContent = "Bought: "
                document.getElementById("30").textContent += amiibo2
                document.getElementById("31").textContent = "Bought: "
                document.getElementById("31").textContent += amiibo3
                document.getElementById("32").textContent = "Bought: "
                document.getElementById("32").textContent += amiibo4
                document.getElementById("33").textContent = "Bought: "
                document.getElementById("33").textContent += amiibo5
                document.getElementById("34").textContent = "Bought: "
                document.getElementById("34").textContent += pikmin1GC
                document.getElementById("35").textContent = "Bought: "
                document.getElementById("35").textContent += pikmin1wii
                document.getElementById("36").textContent = "Bought: "
                document.getElementById("36").textContent += pikmin2GC
                document.getElementById("37").textContent = "Bought: "
                document.getElementById("37").textContent += pikmin2wii
                document.getElementById("38").textContent = "Bought: "
                document.getElementById("38").textContent += pikmin1and2
                document.getElementById("39").textContent = "Bought: "
                document.getElementById("39").textContent += pikmin3wiiu
                document.getElementById("40").textContent = "Bought: "
                document.getElementById("40").textContent += pikmin3switch
                document.getElementById("41").textContent = "Bought: "
                document.getElementById("41").textContent += heypikmin
                document.getElementById("42").textContent = "Bought: "
                document.getElementById("42").textContent += pikmin4
            }
            setInterval(showAll, 10)
            function cartButton(){
                alert(`Red Pikmin Action Figurines in cart: ${redpikmin}`)
                alert(`Yellow Pikmin Action Figurines in cart: ${yellowpikmin}`)
                alert(`Blue Pikmin Action Figurines in cart: ${bluepikmin}`)
                alert(`Purple Pikmin Action Figurines in cart: ${purplepikmin}`)
                alert(`White Pikmin Action Figurines in cart: ${whitepikmin}`)
                alert(`Rock Pikmin Action Figurines in cart: ${rockpikmin}`)
                alert(`Winged Pikmin Action Figurines in cart: ${wingedpikmin}`)
                alert(`Ice Pikmin Action Figurines in cart: ${icepikmin}`)
                alert(`Glow Pikmin Action Figurines in cart: ${glowpikmin}`)
                alert(`Puffmin Plushies in cart: ${fungalplush}`)
                alert(`Oatchi Plushies in cart: ${dog1Plush}`)
                alert(`Moss Plushies in cart: ${dog2Plush}`)
                alert(`Ice Onion Plushies in cart: ${iceOnion}`)
                alert(`Red Pikmin Plushies in cart: ${redPlush}`)
                alert(`Yellow Pikmin Plushies in cart: ${yellowPlush}`)
                alert(`Blue Pikmin Plushies in cart: ${bluePlush}`)
                alert(`Purple Pikmin Plushies in cart: ${purplePlush}`)
                alert(`White Pikmin Plushies in cart: ${whitePlush}`)
                alert(`Rock Pikmin Plushies in cart: ${rockPlush}`)
                alert(`Winged Pikmin Plushies in cart: ${wingedPlush}`)
                alert(`Ice Pikmin Plushies in cart: ${icePlush}`)
                alert(`Glow Pikmin Plushies in cart: ${glowPlush}`)
                alert(`Sticker lootboxes (1 Sticker, Type 1) in cart: ${stickerlootbox1}`)
                alert(`Sticker sets (All Stickers, Type 1) in cart: ${stickerset1}`)
                alert(`Sticker lootboxes (1 Sticker, Type 2) in cart: ${stickerlootbox2}`)
                alert(`Sticker sets (All Stickers, Type 2) in cart: ${stickerset2}`)
                alert(`Sticker lootboxes (1 double Sticker, Type 3) in cart: ${stickerlootbox3}`)
                alert(`Sticker sets (All Stickers, Type 3) in cart: ${stickerset3}`)
                alert(`Alph amiibos in cart: ${amiibo1}`)
                alert(`Olimar amiibos in cart: ${amiibo2}`)
                alert(`Hey! Pikmin amiibos in cart: ${amiibo3}`)
                alert(`Oatchi amiibos in cart: ${amiibo4}`)
                alert(`Red Pikmin amiibos in cart: ${amiibo5}`)
                alert(`Copies of the original Pikmin 1 in cart: ${pikmin1GC}`)
                alert(`Copies of Pikmin 1: New Play Control in cart: ${pikmin1wii}`)
                alert(`Copies of Pikmin 2 for the Gamecube in cart: ${pikmin2GC}`)
                alert(`Copies of Pikmin 2 for the Wii in cart: ${pikmin2wii}`)
                alert(`Copies of Pikmin 1+2 in cart: ${pikmin1and2}`)
                alert(`Copies of the original Pikmin 3 in cart: ${pikmin3wiiu}`)
                alert(`Copies of Pikmin 3 Deluxe in cart: ${pikmin3switch}`)
                alert(`Copies of Hey! Pikmin in cart: ${heypikmin}`)
                alert(`Copies of Pikmin 4 in cart: ${pikmin4}`)
            }
            setInterval(showStorebucks, 10)
            var buttonSummoned = 0
            function summonInput(){
                var inputter = document.createElement("button")
                inputter.setAttribute("style", "color: red; background-color: black: border: solid 4px red; margin-left: 780px")
                inputter.setAttribute("class", "retrobuttons2")
                inputter.setAttribute("id", "openChamberButton")
                inputter.setAttribute("onclick", "openCodeChamber()")
                document.getElementById("codechamberbuttonSummon").appendChild(inputter)
                document.getElementById("openChamberButton").textContent = "Go to Code Chamber"
                buttonSummoned = 1
            }
            function openCodeChamber(){
                window.open("file:///Users/amonrosik/Desktop/Website/codechamber.html")
                window.close()
            }