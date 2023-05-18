import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { styles } from "./homeScreen.styles";
import CardArticle from "../../component/home/cardArticle/CardArticle";
import { useSelector } from 'react-redux';

const { width } = Dimensions.get("window");
const HomeScreen = () => {
  const articles = useSelector(state => state.articles);
  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Blogs..."
            placeholderTextColor="white"
          />
        </View>

        <View style={styles.containerFilter}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.btnFilter}>
              <Text style={styles.buttonText}>Filtros</Text>
            </View>
            <TouchableOpacity style={styles.btnFilter}>
              <Text style={styles.buttonText}>UX/UI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFilter}>
              <Text style={styles.buttonText}>Back-end</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFilter}>
              <Text style={styles.buttonText}>Front-end</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFilter}>
              <Text style={styles.buttonText}>Otro</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View>
          <FlatList
            data={articles}
            renderItem={({ item }) => <CardArticle item={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>

      </View>
    </>
  );
};

export default HomeScreen;
