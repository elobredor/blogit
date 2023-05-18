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
import { data } from "../../component/cardArticle/data";
import CardArticle from "../../component/cardArticle/CardArticle";

const { width } = Dimensions.get("window");
const HomeScreen = () => {
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

        <ScrollView>
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
              data={data}
              renderItem={({ item }) => <CardArticle item={item} />}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
