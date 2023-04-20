import { issues } from 'app/api/mocks/issues/route';
import { searchData } from 'components/Lists';
import { initialFilterState, Reaction } from 'store/atoms';

describe('검색 테스트', () => {
  test('기본 조건', () => {
    const normal = searchData({ data: issues, filter: initialFilterState });
    //기본 목록이 30개
    expect(30).toBe(normal?.length);
  });

  // 5개가 나와야함
  test('검색어 ab 테스트', () => {
    const normal = searchData({
      data: issues,
      filter: {
        ...initialFilterState,
        title: 'ab',
      },
    });
    expect(5).toBe(normal?.length);
  });

  // 2개가 나와야함
  test('리액션 +1 조건을 제외 ', () => {
    const normal = searchData({
      data: issues,
      filter: {
        ...initialFilterState,
        reactions: {
          ...initialFilterState.reactions,
          ['+1']: false,
        },
      },
    });
    expect(2).toBe(normal?.length);
  });

  // 1개가 나와야함
  test('리액션 +1 조건을 제외 검색어 b와 같이 검색', () => {
    const normal = searchData({
      data: issues,
      filter: {
        ...initialFilterState,
        title: 'b',
        reactions: {
          ...initialFilterState.reactions,
          ['+1']: false,
        },
      },
    });
    expect(1).toBe(normal?.length);
  });

  // 0개가 나와야함
  test('모든 리액션 조건이 없을때', () => {
    const normal = searchData({
      data: issues,
      filter: {
        ...initialFilterState,
        reactions: {
          [Reaction.PLUSONE]: false,
          [Reaction.MINUSEONE]: false,
          [Reaction.CONFUSED]: false,
          [Reaction.EYES]: false,
          [Reaction.HEART]: false,
          [Reaction.HOORAY]: false,
          [Reaction.LAUGT]: false,
          [Reaction.ROCKET]: false,
        },
      },
    });
    expect(0).toBe(normal?.length);
  });

  // 0개가 나와야함
  test('모든 리액션 조건이 없을때', () => {
    const normal = searchData({
      data: issues,
      filter: {
        ...initialFilterState,
        reactions: {
          [Reaction.PLUSONE]: false,
          [Reaction.MINUSEONE]: false,
          [Reaction.CONFUSED]: false,
          [Reaction.EYES]: false,
          [Reaction.HEART]: false,
          [Reaction.HOORAY]: false,
          [Reaction.LAUGT]: false,
          [Reaction.ROCKET]: false,
        },
      },
    });
    expect(0).toBe(normal?.length);
  });

  //0개
  test('일치하지 않는 검색어일떄', () => {
    const normal = searchData({
      data: issues,
      filter: {
        ...initialFilterState,
        title: 'ㄷ햐ㅐㄷ배ㅑㄷ흡댜ㅐ흐대뱌ㅡㅎㅂ댜ㅐ흡댜',
      },
    });
    expect(0).toBe(normal?.length);
  });
});
