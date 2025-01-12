import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback, // react-native에서 임포트
} from 'react-native';
import {renderMemberItem} from '../components/MemberUI';
import {GROUP_MEMBERS} from '../constants/dummy';
import {UserRole} from '../type/status';

// role, 위치에 따라 다름
// view members , user가 들어간 경우 -> 모든 멤버를 볼수 있음
//      지금은 아무 기능 없음

// role이 staff , admin
//    group의 edit 버튼을 누르면 -> group의 edit 화면으로 이동 -> 수정 모달,

// role이 staff , admin
//      activity의 edit 버튼을 누르면 -> activity의 edit 화면으로 이동

export default function ActivityMembersScreen() {
  // 검색어 상태 -> 이 부분은 나중에  jwt로 설정
  const [role, setRole] = useState<UserRole>(UserRole.USER);
  const [searchText, setSearchText] = useState('');

  // 모달 제어 상태
  const [modalVisible, setModalVisible] = useState(false);
  // 현재 선택된 멤버 정보
  const [selectedMember, setSelectedMember] = useState(null);

  // 예시 멤버 데이터 (Join Member)
  const joinMembers = [
    {name: 'hyowchoi', id: '123456789'},
    {name: 'daewoole'},
    {name: 'dongglee'},
    {name: 'eunbikim'},
    {name: 'gykoh'},
    {name: 'hyungnoh'},
    {name: 'inshin'},
    {name: 'jeekim'},
    {name: 'jihykim2'},
    {name: 'jimchoi'},
  ];

  // 예시 멤버 데이터 (하단 섹션)
  const otherMembers = [
    {name: 'test1', id: '123456789'},
    {name: 'test2'},
    {name: 'test3'},
    {name: 'test4'},
    {name: 'test5'},
    {name: 'test6'},
    {name: 'test7'},
    {name: 'test8'},
  ];

  // 검색 로직
  const filterMembers = members => {
    if (!searchText) return members;
    return members.filter(member =>
      member.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  };

  // 멤버 클릭 시 모달 열기
  const onMemberPress = member => {
    setSelectedMember(member);
    setModalVisible(true);
  };

  // 모달에서 "추가" 선택
  const onAddPress = () => {
    console.log(`${selectedMember?.name} 추가`);
    // 추가 로직 처리
    setModalVisible(false);
  };

  // 모달에서 "제거" 선택
  const onRemovePress = () => {
    console.log(`${selectedMember?.name} 제거`);
    // 제거 로직 처리
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 텍스트 */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Activity Members {joinMembers.length}</Text>

        {/* 검색 바 */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search members"
          value={searchText}
          onChangeText={setSearchText}
        />

        <ScrollView>
          {/* Join Member 섹션 */}
          <View style={styles.membersContainer}>
            <Text style={styles.sectionTitle}>Join Member</Text>

            <View style={styles.membersGrid}>
              {GROUP_MEMBERS.map(member =>
                renderMemberItem(member, onMemberPress),
              )}
            </View>
          </View>

          <View style={styles.membersContainer}>
            <Text style={styles.sectionTitle}>Members</Text>
            <View style={styles.membersGrid}>
              {GROUP_MEMBERS.map(member => renderMemberItem(member))}
            </View>
          </View>
        </ScrollView>
      </View>

      {/* 멤버 선택 모달 */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        {/* 외부 터치 시 모달 닫기 */}
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            {/* 모달 내부 터치 시 모달 닫히지 않도록 빈 TouchableWithoutFeedback */}
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>
                  {selectedMember?.name}를(을) 어떻게 하시겠습니까?
                </Text>
                <View style={styles.modalButtonGroup}>
                  <TouchableOpacity
                    style={[styles.modalButton, {backgroundColor: '#4CAF50'}]}
                    onPress={onAddPress}>
                    <Text style={styles.modalButtonText}>추가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.modalButton, {backgroundColor: '#F44336'}]}
                    onPress={onRemovePress}>
                    <Text style={styles.modalButtonText}>제거</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  infoContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  memberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
    // borderWidth: 1,s
  },
  memberBox: {
    width: '30%',
    backgroundColor: '#333',
    margin: '1.5%',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberText: {
    color: '#fff',
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 16,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // 배경을 어둡게 만듦
    justifyContent: 'center', // 모달을 중앙에 배치
    alignItems: 'center', // 모달을 중앙에 배치
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    // 그림자 추가 (iOS와 Android)
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  modalButtonGroup: {
    flexDirection: 'row',
    // marginBottom: 16,
    width: '100%',
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  closeText: {
    color: '#999',
    marginTop: 8,
    textDecorationLine: 'underline',
  },
  membersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  membersContainer: {marginTop: 16},
});
