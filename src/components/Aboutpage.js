import React from 'react';
import './style.css'
import { ReactComponent as MySVG } from '../Assets/Dasaradha.svg';
import { ReactComponent as MySVG1 } from '../Assets/RAMA.svg';
import { ReactComponent as MySVG2 } from '../Assets/Sita.svg';
import { ReactComponent as MySVG3 } from '../Assets/lakshmana.svg';
import { ReactComponent as MySVG4 } from '../Assets/hanuman.svg';
import { ReactComponent as MySVG5 } from '../Assets/Ravana.svg';

const Aboutpage = () => {
  return (
    <div>
        <h1 className='heading'>About of ramayana characters</h1>
    <MySVG className='my-svg1'/>
      <h4>Dasartha</h4>
      <div className='paragraph'>
    <p>Dasaratha is the emperor of Kosala and Rama’s father. He has three wives, Kausalya, Kaikeyi, and Sumithra, none of whom have children, but after offering specific sacrifices, he has four sons: Rama, Lakshmana, Sathrugna, and Bharatha. Dasaratha cares deeply for all four of his children and resists Viswamithra's request to take Rama on a journey to protect him. However, Dasaratha is extremely dutiful, and finally agrees to Viswamithra's wishes. Later, when Dasaratha realizes that he's getting quite old and should pick a successor, he chooses Rama to succeed him. When Kaikeyi insists that Dasaratha crown her son Bharatha instead of Rama to fulfill a boon he granted her years ago, Dasaratha feels he has no choice but to agree, though agreeing to this leads to Dasaratha's death.</p>
    </div>
    <h4>Rama</h4>
    <MySVG1 className='my-svg1'/>
    <div className='paragraph'>
    <p>
    "Rama" typically refers to Lord Rama, a major deity in Hinduism. He is considered the seventh avatar of the god Vishnu and is a central figure in the Hindu epic, the Ramayana. Lord Rama is revered for his exemplary characteristics, righteousness, and adherence to dharma (righteousness). The Ramayana narrates the life and adventures of Rama, his wife Sita, and his loyal devotee Hanuman, among others.
</p>
<p>
The story of Rama is not only a religious scripture but also a cultural and moral guide for millions of people, particularly in India and Southeast Asia. It teaches lessons about loyalty, duty, honor, and the triumph of good over evil.
    </p>
    </div>
    
 
    <MySVG2 className='my-svg2'/>
    <h4>Sita</h4>
    <div className='paragraph'>
  <p>Sita Devi, an iconic figure in Hindu mythology, epitomizes loyalty, virtue, and unwavering devotion. As the beloved wife of Lord Rama, she exemplifies the ideal of spousal commitment and moral integrity. Her resilience is showcased in the epic Ramayana, where she accompanies Rama during his exile, endures numerous hardships, and faces abduction by the demon king Ravana. Despite her trials, Sita's unyielding love for Rama remains steadfast, serving as a beacon of strength and righteousness for generations to come.</p>
    </div>
    <MySVG3 className='my-svg2'/>
    <h4>Lakshmana</h4>
    <div className='paragraph'>
  <p>Lakshmana, the devoted younger brother of Lord Rama, is celebrated for his unwavering loyalty, valor, and selflessness. In the epic Ramayana, he accompanies Rama and Sita into exile, forsaking the comforts of the palace to fulfill his duty. Renowned for his exceptional archery skills and unflinching dedication to his brother, Lakshmana plays a pivotal role in the battle against the demon king Ravana. His sacrifice and unwavering support exemplify the virtues of brotherhood, duty, and sacrifice, making him an enduring symbol of devotion in Hindu mythology.</p>
    </div>
    <MySVG4 className='my-svg2'/>
    <h4>Hanuman</h4>
    <div className='paragraph'>
        <p>Hanuman, a prominent figure in Hindu mythology, is revered for his unparalleled strength, devotion, and loyalty. He is depicted as a monkey-faced deity, known for his pivotal role in the epic Ramayana. Hanuman is a devoted disciple of Lord Rama and plays a crucial role in the rescue of Rama's wife, Sita, from the clutches of the demon king Ravana. Endowed with extraordinary powers, including the ability to change his size at will and fly across great distances, Hanuman's unwavering dedication to Rama and his selfless service exemplify the highest ideals of devotion and righteousness. He is venerated as a symbol of courage, loyalty, and devotion in Hinduism, with temples dedicated to him across India and beyond.</p>
    </div>
    <MySVG5 className='my-svg2'/>
    <h4>Ravana</h4>
    <div className='paragraph'>
        <p>
Ravana, the antagonist in the Hindu epic Ramayana, stands as a complex and multifaceted character embodying both grandeur and villainy. As the sovereign of Lanka, he commands immense power, intellect, and devotion, particularly to Lord Shiva. Yet, his fatal flaw lies in his unchecked ambition and pride, leading to his audacious abduction of Sita, the wife of Lord Rama. Despite his role as the primary antagonist, Ravana is portrayed with layers of complexity, revealing glimpses of nobility, scholarly wisdom, and familial loyalty. His ultimate downfall serves as a poignant reminder of the perils of ego and the supremacy of dharma, resonating with timeless themes of righteousness, power, and the eternal struggle between good and evil in Hindu mythology.</p>
    </div>
    </div>
    
  )
}

export default Aboutpage
