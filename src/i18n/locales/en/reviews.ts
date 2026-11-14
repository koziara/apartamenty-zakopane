// Guest review texts by review id and rating labels by source (names, dates and scores live in src/lists/reviews.json)
export const reviewTexts: Record<number, string> = {
  1: 'Great location, wonderful rooms. The view from the window is superb. A quiet area, yet you can walk everywhere.',
  2: 'Beautiful furnishings, furniture in the Zakopane style. Very good location, close to the trail, the centre and the shop. Peace and quiet. Morning coffee on the terrace with a view of Giewont was superb!',
  3: 'A perfect place for us. For some it may be too far from the centre, but for us the quiet, the quick access to the trails and being away from all the hustle made us feel comfortable. The rooms are beautiful and spotless, and the beds... oh, you didn\'t want to get up. Still, the view of Giewont motivated us every day.',
  4: 'This place was beautiful. The hiking trail was nearby, as was the city centre. The rooms were spacious and had everything we needed. The style is traditionally Polish, which made us feel like we were in another country! The view from the room is gorgeous, overlooking the mountains. I\'d love to come back.',
};

export const scoreLabels: Record<string, string> = {
  'Booking.com': 'Exceptional',
  'Google Maps': 'Excellent',
};
