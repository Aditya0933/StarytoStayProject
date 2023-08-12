import Sto1 from '../assets/1-happy-pet-stories-2017-A-dog-named-Boy-3063.webp'
import Sto2 from '../assets/2-happy-pet-stories-2017-Priceless-Picasso.webp'
import Sto3 from '../assets/3-happy-pet-stories-2017-Wags-to-Riches-Patrick-Stewart-Ginger.webp'
import Sto5 from '../assets/5-happy-pet-stories-2017-Dog-reunited-Marmaduke-Reunion-4552.webp'
import Sto4 from '../assets/4-happy-pet-stories-2017-Dog-and-puppies-Hurricane-Harvey.webp'
import Sto6 from '../assets/6-happy-pet-stories-2017-Hurricane-Harvey-heroes-for-pets.webp'
import Sto7 from '../assets/7-happy-pet-stories-2017-senior-German-Shepherd-Sienna-7381.webp'
import Sto8 from '../assets/8-happy-pet-stories-2017-Homer-9111.webp'
import Sto9 from '../assets/9-happy-pet-stories-2017-Love-letter-to-dog.webp'
import Sto10 from '../assets/10-happy-pet-stories-2017-Two-older-dogs.webp'
export default function Story(){
    return(
        <div>
            <div class="flex flex-col py-20 px-1 bg-gray-900 sm:px-10">
                <h1 class="font-bold text-4xl text-center mb-10 text-white">Happy Stories </h1>
                <p class="text-xl text-center mb-10 text-white">We are happy that we help families find a new family member for themselves.</p>
                
                <div class="flex overflow-x-scroll pb-10 hide-scroll-bar z-50 mt-5">
                    <div class="flex flex-nowrap z-50">
                        <div class="inline-block px-3">
                            <div class="w-[310px] h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none p-3">
                            <h3 className='text-center mb-2'> A dog named Boy</h3>
                                <img src={Sto1} alt="" className='p-2 rounded'/>
                                <p className='mt-2 p-2'>A Texas family’s tragic year turns hopeful knowing that their dog is safe after Hurricane Harvey.
                                Boy the dog is more than a pet to his family Boy is more than a pet to his family. When Hurricane Harvey separated the sweet brown-and-white pit bull terrier from the Bonillas, it was devastating on a deeper level than just missing their dog. </p>
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div class="w-[310px] h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none p-3 ">
                            <h3 className='text-center mb-2'>Priceless Picasso</h3>
                                <img src={Sto2} alt="" className='p-2 rounded'/>
                                 <p className='mt-2 p-2'>Best Friends Network partner spotlight: Why everyone is falling in love with two dogs saved by Luvable Dog Rescue.

            Picasso and Pablo the dogs are brothers and one has a smile like no other

            Not long ago, Picasso and Pablo were on a shelter's kill list. The two dogs are brothers and one has a smile like no other. But a network partner organization took them in and changed their lives forever. </p>
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div class="w-[310px] h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none p-3 ">
                            <h3 className='text-center mb-2'> Wags to riches</h3>
                                <img src={Sto3} alt="" className='p-2 rounded'/>
                                 <p className='mt-2 p-2'>Patrick Stewart fosters a pit bull for Wags and Walks, and it’s utterly adorable.

            Patrick Stewart fosters a pit bull terrier named Ginger for Wags and Walks

            Actor Patrick Stewart has a new leading lady and the couple’s love story is burning up the screen. </p>
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div class="w-[310px] h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none p-3 ">
                            <h3 className='text-center mb-2'>Dog and her puppies safe after Hurricane Harvey</h3>
                                <img src={Sto4} alt="" className='p-2 rounded'/>
                                 <p className='mt-2 p-2'>A mother and her litter of puppies find shelter.

            Wonderful mama dog Sweet Abilene is doing a great job caring for her babies

            Received with warm, loving arms, this wonderful mama is doing a great job caring for her babies, and finally is getting some much-needed rest </p>
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div class="w-[310px] h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none p-3 ">
                            <h3 className='text-center mb-2'> Dog reunited with family after hurricane</h3>
                                <img src={Sto5} alt="" className='p-2 rounded'/>
                                 <p className='mt-2 p-2'>Marmaduke got out of his yard just as the flooding hit.

            Diana Brown and her family have lost a lot in the past two weeks, but got their dog Marmaduke back

            Diana Brown and her family have lost a lot in the past two weeks — but not their goofy, gangly brindle pup</p>
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div class="w-[310px] h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none p-3 ">
                            <h3 className='text-center mb-2'>Hurricane Harvey brings together heroes for pets</h3>
                                <img src={Sto6} alt="" className='p-2 rounded'/>
                                 <p className='mt-2 p-2'>Men and women in uniform volunteer to help pets after disaster.

            Men and women in uniform volunteer to help pets after Hurricane Harvey in Houston

            “What’s been fantastic about the men and women in uniform is that they’re ready and willing to do whatever is needed. And they’re often coming off long shifts at difficult jobs, but they’re happy to go an hour longer for the animals.” </p>
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div class="w-[310px] h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none p-3 ">
                            <h3 className='text-center mb-2'>German shepherd receives the gift of a new home</h3>
                                <img src={Sto7} alt="" className='p-2 rounded'/>
                                 <p className='mt-2 p-2'>After ending up in a Los Angeles shelter, Sienna faces fears and gets a great new family.

            Senior German shepherd dog Sienna overcame her fears and landed the perfect family

            From frightened and fearful to safe and secure in a forever home, senior dog Sienna overcame her fears and landed the perfect family, with help from her caregivers at Best Friends in Los Angeles</p>
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div class="w-[310px] h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none p-3 ">
                            <h3 className='text-center mb-2'> Homer’s odyssey</h3>
                                <img src={Sto8} alt="" className='p-2 rounded'/>
                                 <p className='mt-2 p-2'>One of the Sanctuary’s longest residing cats finally gets a home.

            After nearly two decades of waiting, Homer the cat has finally been adopted

            After nearly two decades of waiting, a cat at Best Friends Animal Sanctuary has finally found a home</p>
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div class="w-[310px] h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none p-3 ">
                            <h3 className='text-center mb-2'>  Love letter to a dog</h3>
                                <img src={Sto9} alt="" className='p-2 rounded'/>
                                 <p className='mt-2 p-2'>She was once unwanted and then faced challenges finding the right home. But now the dog named Mrs. Mary Todd Lincoln is loved beyond belief.

            Mrs. Mary Todd Lincoln the dog’s adoption story from Best Friends in New York is pure happiness

            Mrs. Mary Todd Lincoln’s adoption story is the kind of pure happiness that makes you want to keep striving to Save Them All. This sweet dog, adopted from Best Friends in New York, is loved beyond belief. </p>
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div class="w-[310px] h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none p-3 ">
                            <h3 className='text-center mb-2'>Two older dogs, one perfect home</h3>
                                <img src={Sto10} alt="" className='p-2 rounded'/>
                                 <p className='mt-2 p-2'>Adopting two senior shih tzus is the best decision these New Yorkers have ever made.

            Adopting two senior shih tzus is the best decision these New Yorkers have ever made

            “We are absolutely not getting a dog today,” said David Johnston to Danny Costa.

            David must have really meant what he said, because they didn’t adopt a dog that day. They adopted two.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
