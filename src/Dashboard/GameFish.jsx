import React, { useEffect, useState, useRef } from 'react';

const GameFish = () => {
    const [category, setCategory] = useState([]);



    const fishNameRef = useRef(null);
    const scientificNameRef = useRef(null);
    const categoryRef = useRef(null);
    const fileRef = useRef(null);
    const lengthRef = useRef(null);
    const weightRef = useRef(null);
    const recordRef = useRef(null);
    const lifespanRef = useRef(null);
    const howToCatchRef = useRef(null);
    const footHabitTypeRef = useRef([]);
    const baitingTimeRef = useRef(null);
    const fishingSkillRef = useRef(null);
    const globePositionRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleAddGameFish = () => {
        const fishName = fishNameRef.current.value;
        const scientificName = scientificNameRef.current.value;
        const category = categoryRef.current.value;
        const file = fileRef.current.files[0];
        const length = lengthRef.current.value;
        const weight = weightRef.current.value;
        const record = recordRef.current.value;
        const lifespan = lifespanRef.current.value;
        const howToCatch = howToCatchRef.current.value;
        const globePosition = globePositionRef.current.value;
        const description = descriptionRef.current.value;


        const divElement = document.getElementById('myDiv');
        const checkboxInputs1 = divElement.querySelectorAll('input[type="checkbox"]');
        const footHabitTypeRefs = [];
        checkboxInputs1.forEach(input => {
            if (input.checked) {
                footHabitTypeRefs.push(input.value);
            }
        });


        const divElements = document.getElementById('my-batting');
        const checkboxInputs = divElements.querySelectorAll('input[type="checkbox"]');
        const baitingTimes = [];
        checkboxInputs.forEach(input => {
            if (input.checked) {
                baitingTimes.push(input.value);
            }
        });





        const SkillElement = document.getElementById('fishing-skill');
        const radioInputs = SkillElement.querySelectorAll('input[type="radio"]');
        let skill = null;
        radioInputs.forEach(input => {
            if (input.checked) {
                skill = input.value;
            }
        });




        const data = {
            fishName,
            scientificName,
            category,
            file,
            length,
            weight,
            record,
            lifespan,
            howToCatch,
            globePosition,
            description,
            baitingTimes,
            skill
        }


        console.log(file);

        const formData = new FormData();
        formData.append('file', file);

        fetch('https://upload.rainbosoft.com', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                const img = data.url;
                const info = {
                    fishName,
                    scientificName,
                    category,
                    length,
                    weight,
                    record,
                    lifespan,
                    howToCatch,
                    globePosition,
                    description,
                    baitingTimes,
                    skill,
                    img,
                    footHabitTypeRefs
                }
                if(data.url){
                    fetch('http://localhost:5000/game-fish-post', {
                        method: "POST",
                        headers : {
                            'content-type' : 'application/json'
                        },
                        body : JSON.stringify(info)
                    })
                    .then(res=> res.json())
                    .then(data=> console.log(data))
                }
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });

    };



    useEffect(() => {
        fetch('http://localhost:5000/game-fish-category-get')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, []);


    return (
        <div className='p-5'>
            <h1 className='my-5 text-center'>Add Game Fish</h1>
            <div className='flex justify-between gap-3'>
                <input ref={fishNameRef} type="text" className='block w-full p-2 rounded border focus:outline-none' placeholder='Fish name' />
                <input ref={scientificNameRef} type="text" className='block w-full p-2 rounded border focus:outline-none' placeholder='Scientific name' />
                <select ref={categoryRef} className='block w-full p-2 rounded border focus:outline-none'>
                    <option value="null">--Select category --</option>
                    {category.map(cat => <option value="null">{cat.name}</option>)}
                </select>
            </div>
            <div className='flex justify-between gap-3 my-3'>
                <input ref={fileRef} type="file" className='block w-full p-2 rounded border focus:outline-none' />
                <input ref={lengthRef} type="text" placeholder='Length' className='block w-full p-2 rounded border focus:outline-none' />
                <input ref={weightRef} type="text" placeholder='Weight' className='block w-full p-2 rounded border focus:outline-none' />
            </div>
            <div className='flex justify-between gap-3 my-3'>
                <input ref={recordRef} type="text" placeholder='Record' className='block w-full p-2 rounded border focus:outline-none' />
                <input ref={lifespanRef} type="text" placeholder='Lifespan' className='block w-full p-2 rounded border focus:outline-none' />
                <input ref={howToCatchRef} type="text" placeholder='How to catch' className='block w-full p-2 rounded border focus:outline-none' />
            </div>

            <section className='grid grid-cols-3'>
                <div id='myDiv'>
                    <h5 className='my-4'>Foot Habit and Type:</h5>
                    <label>
                        <input ref={footHabitTypeRef} className='mx-3' type="checkbox" name="footHabitType" value="Carnivores" />
                        Carnivores
                    </label>
                    <br />
                    <label>
                        <input ref={footHabitTypeRef} className='mx-3' type="checkbox" name="footHabitType" value="Herbivores" />
                        Herbivores
                    </label>
                    <br />
                    <label>
                        <input ref={footHabitTypeRef} className='mx-3' type="checkbox" name="footHabitType" value="Omnivores" />
                        Omnivores
                    </label>
                    <br />
                    <label>
                        <input ref={footHabitTypeRef} className='mx-3' type="checkbox" name="footHabitType" value="Limnivores" />
                        Limnivores
                    </label>
                </div>
                <div id='my-batting'>
                    <h5 className='my-4'>Best Baiting Time:</h5>
                    <label>
                        <input ref={baitingTimeRef} className='mx-3' type="checkbox" name="baitingTime" value="Morning-Noon" />
                        Morning - Noon (01:00 AM - 12:00 PM)
                    </label>
                    <br />
                    <label>
                        <input ref={baitingTimeRef} className='mx-3' type="checkbox" name="baitingTime" value="Noon-Evening" />
                        Noon - Evening (3.30 PM - Until Sunset)
                    </label>
                    <br />
                    <label>
                        <input ref={baitingTimeRef} className='mx-3' type="checkbox" name="baitingTime" value="Evening-Midnight" />
                        Evening - Midnight (06:00 PM - 11:59 PM)
                    </label>
                </div>
                <div id='fishing-skill'>
                    <h5 className='my-4'>Fishing Skill Required</h5>
                    <label className=''>
                        <input ref={fishingSkillRef} type="radio" className='mx-3' name="fishingSkill" value="Hard" />
                        Hard
                    </label>
                    <br />
                    <label>
                        <input ref={fishingSkillRef} className='mx-3' type="radio" name="fishingSkill" value="Medium" />
                        Medium
                    </label>
                    <br />
                    <label>
                        <input ref={fishingSkillRef} className='mx-3' type="radio" name="fishingSkill" value="Easy" />
                        Easy
                    </label>
                </div>
            </section>
            <div>
                <div>
                    <select ref={globePositionRef} className='block w-full p-2 rounded border focus:outline-none my-5' name="globePosition">
                        <option value="Globe position">-- select Globe position --</option>
                        <option value="Critically Endangered (CE)">Critically Endangered (CE)</option>
                        <option value="Endangered (EN)">Endangered (EN)</option>
                        <option value="Vulnerable (VU)">Vulnerable (VU)</option>
                        <option value="Near Threatened (NT, LR/cd)">Near Threatened (NT, LR/cd)</option>
                        <option value="Least Concern (LC)">Least Concern (LC)</option>
                    </select>
                    <textarea ref={descriptionRef} className='block h-40 w-full p-2 rounded border focus:outline-none' placeholder=' Description 350 words'></textarea>

                    <button onClick={handleAddGameFish} className='px-5 py-2 text-white rounded-sm bg-blue-950 mt-5'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default GameFish;
