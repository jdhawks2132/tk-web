export const load = ({ params }) => {
	console.log(params.scheduleId);

	return {
		scheduleId: params.scheduleId
	};
};
