import { useQuery } from "@tanstack/react-query";
import { instance } from "../instance";
import { END_POINT } from "@utils/constants/api/api";
import { queryKey } from "@utils/constants/api/queryKey";
import { RoomDetailResponse } from '@app-types/hotelDetail';
import { ApiResponse } from '@app-types/apiResponseType';

const getRoomDetail = async (hotelId: number) => {
  try {
    const response = await instance.get<ApiResponse<RoomDetailResponse>>(
      END_POINT.GET_HOTEL_ROOMS(hotelId)
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error('RoomDetail 데이터를 가져오지 못했습니다.');
  }
};

export const useFetchRoomDetail = (hotelId: number) => {
  return useQuery({
    queryKey: [queryKey.ROOM_DETAIL, hotelId],
    queryFn: () => getRoomDetail(hotelId),
  });
};
