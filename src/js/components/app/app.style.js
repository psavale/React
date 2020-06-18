import {returnDocHt} from '../../utilities/services'



export default {
    container: { height: returnDocHt() },
    headerContainer: { height: 50, backgroundColor:"#f1f1f1", color:"white" },
    contentContainer: { height: returnDocHt() - 100, backgroundColor:"White", color:"black" },
    footerContainer: { height: 50, backgroundColor:"black", color:"white", width:"100%" },
    MenuContainer:{padding:"10"},
    MenuItem:{marginLeft:"15px", color:"red"},
    headerNavRight:{marginRight:"20px"}

    
    
    
}