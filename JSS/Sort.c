#include <stdio.h>

void sortArray(int [], int);

int main(int argc, char* argv[])
{
	int array[] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0};
	for (int i = 0; i < 11; ++i) {
		printf("%d ", array[i]);
	}
	printf("%s\n", "Before sort");
	sortArray(array, 11);
	for (int i = 0; i < 11; ++i) {
		printf("%d ", array[i]);
	}

	return 0;
}






void sortArray(int array[], int arraySize) {
	
	for (int i = 1; i < arraySize; ++i)
	{
		int l = i - 1;
		int temp = array[i];
		while (l >= 0 && array[l] > temp) {
			array[l + 1] = array[l];
		l--;
		}

		array[l + 1] = temp;
	}

}


