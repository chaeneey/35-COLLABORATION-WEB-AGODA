import StarRating from "@components/StarRating/StarRating";
import { IcGood } from "@assets/svg";
import {
  bestseller,
  detailWrapper,
  starRating,
  subtitle,
  subtitleRow,
  thumbsUpWrapper,
  title,
} from "@pages/HotelDetailPage/component/HotelDetail/Detail.style";

interface DetailProps {
  hotelName: string;
  reservationCount: number;
  star: number;
}

const Detail = ({ hotelName, reservationCount, star }: DetailProps) => {
  return (
    <div css={detailWrapper}>
      <span css={bestseller}>베스트셀러</span>
      <h1 css={title}>{hotelName}</h1>
      <div css={subtitleRow}>
        <div css={subtitle}>
          <span>호텔</span>
          <span css={starRating}>
            <StarRating rating={star} />
          </span>
        </div>
        <div css={thumbsUpWrapper}>
          <IcGood />
          <span>오늘 {reservationCount}회 예약됨</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
