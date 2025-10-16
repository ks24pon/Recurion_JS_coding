function deleteAt(s, i) {
  if (i === 0 || i > s.length) {
      // 元の文字列を返す
      return s;
  } else {
      // 指定されたインデックスの文字を削除
      let front = s.slice(0, i-1);
      let back = s.slice(i);
      return front + back;
  }
}