import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {Header} from '../components/Header';

// 화면 너비
const {width} = Dimensions.get('window');

// 멤버 데이터 타입
type Member = {
  id: string;
  name: string;
  phone?: string;
};

// 더미 데이터
const initialMembers: Member[] = [
  {id: '1', name: 'hyowchoi', phone: '123456789'},
  {id: '2', name: 'daewoole'},
  {id: '3', name: 'dongglee'},
  {id: '4', name: 'eunbikim'},
  {id: '5', name: 'gykoh'},
  {id: '6', name: 'hyungnoh'},
  {id: '7', name: 'inshin'},
  {id: '8', name: 'jeekim'},
  {id: '9', name: 'jihykim2'},
  {id: '10', name: 'jimchoi'},
];

export default function MemberScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedMemberIds, setSelectedMemberIds] = useState<string[]>([]);

  // 멤버 목록 필터
  const filteredMembers = initialMembers.filter(member =>
    member.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  // 멤버 선택/해제
  const toggleSelect = (id: string) => {
    if (selectedMemberIds.includes(id)) {
      setSelectedMemberIds(selectedMemberIds.filter(item => item !== id));
    } else {
      setSelectedMemberIds([...selectedMemberIds, id]);
    }
  };

  // Confirm Selection
  const handleConfirmSelection = () => {
    // 실제로는 선택된 멤버 정보를 서버로 전송하거나 다른 화면으로 넘기기 등
    console.log('Selected Member IDs:', selectedMemberIds);
    // alert(`Selected IDs: ${selectedMemberIds.join(', ')}`);
  };

  // 각 멤버를 렌더링할 카드
  const renderMemberCard = ({item}: {item: Member}) => {
    const isSelected = selectedMemberIds.includes(item.id);
    return (
      <TouchableOpacity
        style={[styles.memberCard, isSelected && styles.memberCardSelected]}
        onPress={() => toggleSelect(item.id)}>
        <Text style={styles.memberName}>{item.name}</Text>
        {item.phone ? (
          <Text style={styles.memberPhone}>{item.phone}</Text>
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 헤더 (간단 예시) */}
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>BLUE HEART</Text>
      </View> */}
      <Header />

      <View style={styles.contentWrapper}>
        {/* 제목 & 총 멤버 수 */}
        <Text style={styles.pageTitle}>
          Activity Members {initialMembers.length}
        </Text>

        {/* 검색 바 */}
        <View style={styles.searchBarWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search members..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* 멤버 그리드 (FlatList) */}
        <FlatList
          data={filteredMembers}
          keyExtractor={item => item.id}
          numColumns={3} // 한 줄에 3개씩
          columnWrapperStyle={styles.columnWrapper}
          renderItem={renderMemberCard}
          style={{marginTop: 8, marginBottom: 80}} // Confirm 버튼 자리 확보
        />
      </View>

      {/* 하단 Confirm 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmSelection}>
          <Text style={styles.confirmButtonText}>Confirm Selection</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// -------------------- 스타일 --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  // 상단 헤더
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  // 메인 내용
  contentWrapper: {
    flex: 1,
    padding: 16,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  // 검색 바
  searchBarWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchInput: {
    fontSize: 16,
  },

  // 그리드
  columnWrapper: {
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  memberCard: {
    backgroundColor: '#333',
    width: (width - 48) / 3, // 패딩(16*2) + 간격 등을 고려해서 나눈 값
    height: 80,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberCardSelected: {
    backgroundColor: '#000', // 선택 시 더 짙은 색
  },
  memberName: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  memberPhone: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },

  // 하단 Confirm 버튼
  bottomContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
