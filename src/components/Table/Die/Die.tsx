import die1 from "../../../assets/png/die1.png";
import die2 from "../../../assets/png/die2.png";
import die3 from "../../../assets/png/die3.png";
import die4 from "../../../assets/png/die4.png";
import die5 from "../../../assets/png/die5.png";
import die6 from "../../../assets/png/die6.png";

interface DieProps {
  value: number;
}

const Die = (props: DieProps) => {
  switch (props.value) {
    case 1:
      return <img src={die1} alt="die1" style={{width: '5vw', minWidth: '50px'}}/>;
    case 2:
      return <img src={die2} alt="die2" style={{width: '5vw', minWidth: '50px'}}/>;
    case 3:
      return <img src={die3} alt="die3" style={{width: '5vw', minWidth: '50px'}}/>;
    case 4:
      return <img src={die4} alt="die4" style={{width: '5vw', minWidth: '50px'}}/>;
    case 5:
      return <img src={die5} alt="die5" style={{width: '5vw', minWidth: '50px'}}/>;
    case 6:
      return <img src={die6} alt="die6" style={{width: '5vw', minWidth: '50px'}}/>;
  }
}

export default Die;