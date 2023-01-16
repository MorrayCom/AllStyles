
import {   StyleSheet, View, Text, ImageBackground } from "react-native";
import OIP from "./OIP.jpg";


export default function UI0() {

    return(
        <View style={styles.container}>
            <View style={{
                    backgroundColor: "#EE82EE",
                    height:"650px"
            }}>

                 <View style={{
                    backgroundColor: "#ffffff",
                    height:"200px",
                    width:"60px",
                    margin:100,
                    marginLeft:5,
                    borderRadius: 15
            }}>
               <ImageBackground>
                     <img src={OIP} alt="" />
                </ImageBackground>
            </View>

            <View style={{
                    backgroundColor: "red",
                    height:"180px",
                    width:"100%",
                    marginTop:0,
                    borderRadius: 15
            }}>
              <img src={OIP} alt="" />
            </View>
            </View>
    </View>  
     );
    }


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        padding: "1%",
        marginTop:"2%",
        width:"400px"
    
    },
    navbar:{
        backgroundColor: "red",
        height:"14%"
    }
});

