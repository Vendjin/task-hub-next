import { getProfile } from '@/services/profile';
import { useQuery } from '@tanstack/react-query';





export const useProfile = () => {
	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile
	})

	return {
		user: data
	}
}