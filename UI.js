
import {   StyleSheet, View, Text } from "react-native";
import { SearchBar } from "react-native-screens";
import A11 from "./A11.jpg";
import B11 from "./B11.jpg";
import OIP from "./OIP.jpg";




export default function UI() {

    return(
        <View style={styles.container}>
            <View style={{
                    backgroundColor: "white",
                    height:' 150px',
                    justifyContent: 'space-between',
                    flexDirection: "column",
                    width:"100%"
            }}>
                
                <View
                 style={{
                    backgroundColor: "white",
                    margin: 5,
                    borderTopLeftRadius: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height:"100px",
                    width:"1",
                    // justifyContent: "flex-end",
                   
                }}
                > <Text style={{
                    fontSize: 40,
                    color: 'pink',
                }}>Fashion Week</Text></View>
                <View   style={{
                    backgroundColor: "#ffffff",
                    height:"25px",
                    width:"700px",
                    // justifyContent: "flex-end",
                   
                }}><Text style={{
                    fontSize: 10,
                    color: 'black'
                }}>2021 Fashion show in paris</Text></View>
            </View>


            <View style={{
                    backgroundColor: "white",
                    height:" 70px",
                    flexDirection: "column",
                    padding:0
            }}>
                <View style={{
                    backgroundColor: "white",
                    flexDirection: "column",
                    justifyContent: 'space-between',
                    height: "75px"
                    }}>
                    <View
                        style={{     
                        backgroundColor: "white",
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        }}                    
                    >
                            <Text style={{
                            fontSize: 30,
                            color: 'black'
                        }}>Explore</Text>
                        <Text style={{
                            fontSize: 15,
                            color: 'black'
                        }}>Reglage</Text>

                    </View>
                  
                    <View style={{
                        backgroundColor: "white",
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        height: "50px"
                    }}>
                    <Text style={{
                        fontSize: 15,
                        color: 'black'
                    }}>Recommended</Text>
                    <Text style={{
                        fontSize: 15,
                        color: 'black'
                    }}>New Models</Text>
                        <Text style={{
                        fontSize: 15,
                        color: 'black'
                    }}>2020 show</Text>
                    </View>
                </View>

                <View style={{
                    // justifyContent: 'space-between',
                    flexDirection:"column",
                    backgroundColor:"white",
                    margin:0,
                    height: "150px",
                    }}>
                    <View style={{
                    flexDirection: "row",
                    backgroundColor: "#ffffff",
                    justifyContent:"space-between",
                    height:"125px",
                    padding:1
                    // width:"690px" 
                    }}> 
                        
                        <img src={B11} alt="" />
                        <img src={A11} alt="" />
                        </View>
                        <View
                             style={{
                                flexDirection: "row",
                                backgroundColor: "#ffffff",
                                justifyContent:"space-between"
                                // width:"690px" 
                                }}
                        >
                            <Text
                            style={{
                                backgroundColor: "white",
                                margin: 0,
                                borderTopLeftRadius: 5,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize:15,
                                height:"31px",
                            }}
                            >
                                Niketa William
                            </Text>
                            <Text
                            style={{
                                backgroundColor: "white",
                                margin: 0,
                                borderTopLeftRadius: 5,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize:15,
                                height:"31px",
                            }}
                            >
                                Trisha Louis
                          </Text>
                </View>
            </View>  

            <View
                 style={{
                    flexDirection: "row",
                    backgroundColor: "white",
                    justifyContent:"space-between"
                    // width:"690px" 
                    }}
            >
                <Text
                 style={{
                    backgroundColor: "white",
                    margin: 0,
                    borderTopLeftRadius: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize:20,
                    height:"21px",
                }}
                >
                    Paris
                </Text>
                <Text
                 style={{
                    backgroundColor: "white",
                    margin: 0,
                    borderTopLeftRadius: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize:20,
                    height:"21px",
                }}
                >
                    London
                </Text>
            </View>

            <View
        style={{
            // justifyContent: 'space-between',
            backgroundColor:"yellow",
            margin:0,
            height: "140px",
            alignItems:"center"
            }}
        >
                <img style={{borderTopLeftRadius: 5,}} src={OIP} alt="" />
        </View>
        </View>  
    </View>  
     );
    }


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        padding: "2%",
        marginTop:"3%",
        width:"400px"
    },
    navbar:{
        backgroundColor: "red",
        height:"14%"
    }
});

