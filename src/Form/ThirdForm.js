import React,{useEffect} from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';

export default function ThirdForm(props) {


    useEffect(()=>{
        let date = document.querySelector('.datepicker');
          M.Datepicker.init(date, {});
        },[])
    const conti = e => {
            e.preventDefault();
            props.nextStep();
    };

    return (
        <div className="container lower">
            <form>

                <div className="row">
                <div className="input-field col s12">
                    <h6>What will be yours prime motivator to join edunomics full time post this internship as well ?</h6>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Take a high growth</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Looking for challenges
                        </span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Passionate</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Wish to work in dynamic environment</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Learning</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>To be a part of decision making</span>
                        </label>
                    </p>
                
                </div>

                 
                <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label for="textarea1">Have you ever made plans with your friends for starting up something ? What is it ? Why you haven't pursued it ?</label>
                </div>
                <div className="input-field col s12">
                <input type="text" class="datepicker" placeholder="How soon you can join edunomics ?"/> 
                </div>
                <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label for="textarea1">What all possible ways you will add value to the organisation growth ?</label>
                </div>
                <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label for="textarea1">Why you want to join edunomics ?</label>
                </div>
                <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label for="textarea1">Add a youtube video link of your introduction (max. 90 seconds )</label>
                </div>


                <div className="col s12 center">
                    <button type="submit" className="btn large light-green accent-4" onClick={conti}>Submit<i class="material-icons right">arrow_forward</i></button>
                </div>


                </div>

            </form>
           
        </div>
    )
}
