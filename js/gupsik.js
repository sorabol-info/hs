/*var school = School(School.Type.HIGH,School.Region.SEOUL,	B100000454)
var menu = school.getMonthlyMenu(2020,6)
console.log(menu[23].lunch)
*/
process.env.timeZone = "Asia/Seoul";

const neis = require("../api/src/neis");
const school = neis.createSchool(neis.REGION.SEOUl, "B100000454", neis.TYPE.HIGH);

school.getMeal(2020,6).then(d => {
  d.forEach(meal =>{

  })
})




neis.createSchool(neis.REGION.SEOUL, 'B100000454', neis.TYPE.HIGH).getSchoolDetail().then(school => {
	console.log("학교 명: " +
		school.name + "\n학교 코드 : " + school.code + "\n학교 설립 : " + school.fondYmd +
		"\n학교 위치 : " + school.addr + "\n학교 교육청 코드 : " + school.edu +
		"\n학교 유형 : " + SchoolType[school.kind] + "\n학교 우편 번호 : " + school.zipCode +
		"\n학교 전화 번호 : " + school.tellNum + "\n학교 팩스 번호 : " + school.faxNum +
		"\n학교 홈페이지 주소 : " + school.homepage + "\n학교 남녀 구분 : " + school.coeduScNm +
		"\n학교 설립 유형 : " + school.fondScNm + "\n학교 선생님 수 : " + school.teacherCnt
	)
});
