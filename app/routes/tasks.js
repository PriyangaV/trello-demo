import Ember from 'ember';

const { $, Route } = Ember;

export default Route.extend({
    model: function(){
        return [
            Ember.Object.create({"name": "Fruits", "cards": [
                    Ember.Object.create({ "name": "APPLE", "description": "The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple", "comments": [
                            Ember.Object.create({"message": "Yeah, It's really very sweet!", "time": "Sun Jan 22 2016"})
                        ]
                    }),
                    Ember.Object.create({ "name": "POMEGRANATE", "description": "People use pomegranate for flu, stomatitis, gum, diabetes, etc.", "comments": [
                            Ember.Object.create({ "message": "Yeah, Good for blood!", "time": "Wed Jan 29 2016" })
                        ]
                    })
                ]
            }),
            Ember.Object.create({ "name": "Cars", "cards": [
                    Ember.Object.create({ "name": "JAGUAR", "description": "Jaguar Cars is a brand of Jaguar Land Rover, a British multinational car manufacturer headquartered in Whitley, Coventry, England, owned by the Indian company Tata Motors since 2008.", "comments": [
                            Ember.Object.create({ "message": "Sample Comment For Jaguar!", "time": "Thu Feb 02 2016"  })
                        ]
                    }),
                    Ember.Object.create({ "name": "AUDI", "description": "Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi oversees worldwide operations from its headquarters in Ingolstadt, Bavaria, Germany.", "comments": [
                            Ember.Object.create({ "message": "Sample Comment For Audi!", "time": "Mon Feb 05 2016" })
                        ]
                    }),
                    Ember.Object.create({ "name": "CHEVROLET", "description": "Chevrolet, colloquially referred to as Chevy and formally the Chevrolet Division of General Motors Company, is an American automobile division of the American manufacturer General Motors.", "comments": [
                            Ember.Object.create({ "message": "Sample Comment For Chevrolet!", "time": "Tue Mar 16 2015"  })
                        ]
                    }),
                    Ember.Object.create({ "name": "FIAT", "description": "FIAT is an Italian automaker which produces Fiat branded cars, and is part of Fiat Chrysler Automobiles through its subsidiary FCA Italy S.p.A.., the largest automobile manufacturer in Italy.", "comments": [
                            Ember.Object.create({ "message": "Sample Comment For Fiat!", "time": "Sat Apr 27 2015"  })
                        ]
                    })
                ]
            })
        ];
    },
    actions: {
        didTransition() {
            let self = this;
            Ember.run.later(function(){

                Ember.$(".card-container").sortable();
                Ember.$(".list-container").sortable({"axis": "y"});

                $(".board").delegate(".list", "click", function(){

                    /* >>>>>>>> Remove Active State Of Previous List. <<<<<<<< */
                    $(".active").removeClass("active");

                    /* >>>>>>>> Add Active State Of Selected List. <<<<<<<< */
                    $(this).addClass("active");

                    /* >>>>>>>> Initialising sortable widget For Newly Created List. <<<<<<<< */
                    if( !$(this).next().find(".card-container").hasClass("ui-sortable") ){
                        Ember.$(".card-container").sortable();
                    }

                    /* >>>>>>>> Hide Comments View While Switching Between Lists. <<<<<<<< */
                    self.set("controller.isShowComments", false);
                });
            }, 100);
        }
    }
});
